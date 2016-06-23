(function() {
	'use strict';

	angular
		.module('chilled.favourites')
		.controller('FavouritesController', FavouritesController);

	FavouritesController.$inject =
	[
		'$scope', '$state', 'newsService', 'motion', '$timeout', 
		'$ionicPopup', '$location', '$linq', '$q'	
	];

	/* @ngInject */
	function FavouritesController($scope, $state, newsService, motion, $timeout, $ionicPopup, 
								$location, $linq, $q)
		{
		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate,
			doRefresh: doRefresh
		});

		(function activate() {
			
			var day = $location.path().replace('/app/', '').toLowerCase();

			var canceler = $q.defer();
		  
			var timeoutPromise = $timeout(function() {
			  canceler.resolve(); //aborts the request when timed out
			  console.log('Timed out');
			}, 10000); 	// we set a timeout for 10s and store the promise in order to be cancelled
						// later if the data does not arrive within 250ms

			loadNews().then(function() {
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

		function loadNews() {
			return newsService.all().then(function(data){
				filterFavourites(data);
			});
		}

		function filterFavourites(acts) {

		var userString = window.localStorage['chilled_user'];
		if (userString)
			{
				var user = JSON.parse(userString);
				var favourites = $linq.Enumerable().From(user.favourites);
				var filtered = $linq.Enumerable().From(acts).Where(function(x){
					return favourites.Any(function(f){
						return x.id === f.id;
					});
				}).ToArray();

				vm.articles = filtered;
			}
		}

	function navigate(articleId) {
		$state.go('app.article', { articleId: articleId });
	}

	function doRefresh() {
		setTimeout($scope.$broadcast('scroll.refreshComplete'), 16000);
	}
}
})();