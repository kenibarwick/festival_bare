(function() {
	'use strict';

	angular
		.module('chilled.favourites')
		.controller('FavouritesController', FavouritesController);

	FavouritesController.$inject = ['$scope', '$state', 'motion', '$timeout', '$linq', 'newsService'];

	/* @ngInject */
	function FavouritesController($scope, $state, motion, $timeout, $linq, newsService) {
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
							return x.id == f.id;
						});
						//return x.id == 1;
					}).ToArray();

					vm.articles = filtered;
				};
		}

		function navigate(articleId) {
			$state.go('app.article', { articleId: articleId });
		}

		function doRefresh() {
			setTimeout($scope.$broadcast('scroll.refreshComplete'), 16000);
		}
	}
})();