(function() {
	'use strict';

	angular
		.module('barebone.news')
		.controller('ArticlesController', ArticlesController);

	ArticlesController.$inject = ['$scope', '$state', 'newsService', 'motion', '$timeout', '$ionicPopup', '$location', '$linq', '$q'];

	/* @ngInject */
	function ArticlesController($scope, $state, newsService, motion, $timeout, $ionicPopup, $location, $linq, $q) {
		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate,
			doRefresh: doRefresh
		});

		(function activate() {
			motion.expandHeader();

			var day = $location.path().replace('/app/', '').toLowerCase();

    		var canceler = $q.defer();
		  
		    var timeoutPromise = $timeout(function() {
		      canceler.resolve(); //aborts the request when timed out
		      console.log("Timed out");
		    }, 10000); //we set a timeout for 10s and store the promise in order to be cancelled later if the data does not arrive within 250ms


			loadNews(day).then(function() {
				motion.showItems();
				motion.ink();

				$timeout.cancel(timeoutPromise);
			}, function(response) {
				$ionicPopup.alert({
			    	title: 'there was an error Set!',
			     	template: response
				});
			});
		
		})();
		// ********************************************************************

		function loadNews(day) {
			return newsService.all().then(function(data){
				vm.articles = $linq.Enumerable().From(data).Where(function (x) {
                         return x.day.toLowerCase() == day
                     })
				.ToArray();
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