(function() {
	'use strict';

	angular
		.module('barebone.news')
		.controller('ArticlesController', ArticlesController);

	ArticlesController.$inject = 
<<<<<<< HEAD
	['$scope', '$state', 'newsService', 'motion', '$timeout', '$ionicPopup', '$location', '$linq', '$q'];
=======
	[
		'$scope', '$state', 'newsService', 'motion', '$timeout', '$ionicPopup', '$location', '$linq', '$q'	
	];
>>>>>>> 3cafd20de777529ec074c3a3fc5619c1c48e480d

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

<<<<<<< HEAD
			console.log(day);
    		
			var canceler = $q.defer();
=======
			if (day == 'artists')
			{
				day = 'all'
			}

			vm.header = capitalizeFirstLetter(day);

    		var canceler = $q.defer();
>>>>>>> 3cafd20de777529ec074c3a3fc5619c1c48e480d
		  
		    var timeoutPromise = $timeout(function() {
		      canceler.resolve(); //aborts the request when timed out
		      console.log('Timed out');
<<<<<<< HEAD
		    }, 10000);
			// we set a timeout for 10s and store the promise in order to be cancelled 
			// later if the data does not arrive within 250ms

=======
		    }, 10000); 	//we set a timeout for 10s and store the promise in order 
						// to be cancelled later if the data does not arrive within 250ms
>>>>>>> 3cafd20de777529ec074c3a3fc5619c1c48e480d

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
			    	title: 'there was an error',
			     	template: response
				}); 
			});
		
		})();
		// ********************************************************************

		function loadNews(day) {
			return newsService.all().then(function(data){
<<<<<<< HEAD
				vm.articles = $linq.Enumerable().From(data).Where(function (x) {
                         return x.day.toLowerCase() === day;
                     }).ToArray();
=======
				
				var data = $linq.Enumerable().From(data).Where(function (x) {
                         return (day == 'all') || (x.day.toLowerCase() == day)
                     });
				if (day == 'all')
				{
					data = data.OrderBy("$.name")
				}
				else
				{
					data = data.OrderBy("$.day").ThenBy("$.start")
				}
				vm.articles = data.ToArray();
			}, function(response) {
				$ionicPopup.alert({
			    	title: 'there was an error Set!',
			     	template: response
				}); 
>>>>>>> 3cafd20de777529ec074c3a3fc5619c1c48e480d
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