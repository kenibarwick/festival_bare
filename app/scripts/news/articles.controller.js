(function() {
	'use strict';

	angular
		.module('barebone.news')
		.controller('ArticlesController', ArticlesController);

	ArticlesController.$inject = ['$scope', '$state', 'newsService', 'motion', '$timeout', '$ionicPopup', '$location', '$linq'];

	/* @ngInject */
	function ArticlesController($scope, $state, newsService, motion, $timeout, $ionicPopup, $location, $linq) {
		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate,
			doRefresh: doRefresh
		});

		(function activate() {
			motion.expandHeader();

			var day = $location.path().replace('/app/', '').toLowerCase();

			loadNews(day).then(function() {
				motion.showItems();
				motion.ink();
			});
		})();
		// ********************************************************************

		function loadNews(day) {
			return newsService.all().then(function(data){
				vm.articles = $linq.Enumerable().From(data).Where(function (x) {
                         return x.day.toLowerCase() == day
                     }).ToArray();
			});
		}

		function navigate(articleId) {
			$state.go('app.article', { articleId: articleId });
		}

		function doRefresh() {
			setTimeout($scope.$broadcast('scroll.refreshComplete'), 16000);
		}
	}
})();