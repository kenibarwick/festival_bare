(function() {
	'use strict';

	angular
		.module('barebone.venues', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.venues', {
					url: '/venues',
					views: {
						'menuContent': {
							templateUrl: 'scripts/venues/venues.html',
							controller: 'VenuesController as vm'
						}
					}
				})
				.state('app.venue', {
					url: '/venues/:venueId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/venues/venue.html',
							controller: 'VenueController as vm'
						}
					}
				});
		});
})();