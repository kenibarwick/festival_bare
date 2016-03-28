(function() {
	'use strict';

	angular
		.module('barebone.news')
		.controller('ArticlesController', ArticlesController);

	ArticlesController.$inject = ['$scope', '$state', 'newsService', 'motion', '$timeout'];

	/* @ngInject */
	function ArticlesController($scope, $state, newsService, motion, $timeout) {
		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate,
			doRefresh: doRefresh
		});

		(function activate() {
			motion.expandHeader();

			loadNews().then(function() {
				motion.showItems();
				motion.ink();
			});
		})();
		// ********************************************************************

		function loadNews() {
			return newsService.all().then(function(data){
				vm.articles = data;
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