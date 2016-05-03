(function() {
	'use strict';

	angular
		.module('chilled.favourites', [
			'ionic',
			'restangular',
			'angular-linq',
			'barebone.news'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.favourites', {
					url: '/favourites',
					views: {
						'menuContent': {
							templateUrl: 'scripts/favourites/favourites.html',
							controller: 'FavouritesController as vm'
						}
					}
				});

		});
})();