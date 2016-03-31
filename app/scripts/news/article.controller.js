(function() {
	'use strict';

	angular
		.module('barebone.news')
		.controller('ArticleController', ArticleController);

	ArticleController.$inject = ['$scope', '$stateParams', 'newsService', 'motion', '$ionicPopup'];

	/* @ngInject */
	function ArticleController($scope, $stateParams, newsService, motion, $ionicPopup) {
		var vm = angular.extend(this, {
			article: null,
			favourite: favourite,
		});

		// ********************************************************************
		
		var articleId = parseInt($stateParams.articleId);
		newsService.get(articleId)
			.then(function(article) {
				vm.article = article;

				motion.expandHeader();
			});

		function favourite(article) {

			console.log('wefiewifn');
			
			var message = 'You will receive a notification when ' + article.name + ' is about to start on device ' + $scope.device;

			$ionicPopup.alert({
			     title: 'Favourite Set!',
			     template: message
			});
		}
	}

})();