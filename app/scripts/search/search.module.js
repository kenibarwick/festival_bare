(function() {
	'use strict';

	angular
		.module('barebone.search', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.search', {
					url: '/search',
					views: {
						'menuContent': {
							templateUrl: 'scripts/search/search.html',
							controller: 'SearchController as vm'
						}
					}
				});
		});
})();