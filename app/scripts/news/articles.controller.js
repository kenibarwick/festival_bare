(function() {
	'use strict';

	angular
		.module('barebone.news')
		.controller('ArticlesController', ArticlesController);

	ArticlesController.$inject = 
	[
		'$scope', '$state', 'newsService', 'motion', '$timeout', '$ionicPopup', '$location', '$linq', '$q'	
	];

	/* @ngInject */
	function ArticlesController($scope, $state, newsService, motion, $timeout, $ionicPopup, $location, $linq, $q)
		{
		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate,
			doRefresh: doRefresh,
			header: ''
		});

		(function activate() {
			//

			var day = $location.path().replace('/app/', '').toLowerCase();

			if (day == 'artists')
			{
				day = 'all'
			}

			vm.header = capitalizeFirstLetter(day);

    		var canceler = $q.defer();
		  
		    var timeoutPromise = $timeout(function() {
		      canceler.resolve(); //aborts the request when timed out
		      console.log('Timed out');
		    }, 10000); 	//we set a timeout for 10s and store the promise in order 
						// to be cancelled later if the data does not arrive within 250ms

			loadNews(day).then(function() {
				try {
					motion.showItems();
					motion.ink();
				}
				catch(err) {
					console.log(err);	
				}
				finally {
					$timeout.cancel(timeoutPromise);	
				}
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
				
				var data = $linq.Enumerable().From(data).Where(function (x) {
                         return (day == 'all') || (x.day.toLowerCase() == day)
                     });
				if (day = 'all')
				{
					data = data.OrderBy("$.name")
				}
				vm.articles = data.ToArray();
			}, function(response) {
				$ionicPopup.alert({
			    	title: 'there was an error Set!',
			     	template: response
				}); 
			});
		}

		function navigate(articleId) {
			$state.go('app.article', { articleId: articleId });
		}

		function doRefresh() {
			setTimeout($scope.$broadcast('scroll.refreshComplete'), 16000);
		}

		function capitalizeFirstLetter(string) {
		    return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}
})();