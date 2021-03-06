(function() {
	'use strict';

	angular
		.module('chilled.about', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
			.state('app.about', {
				url: '/about',
				views: {
					'menuContent': {
						templateUrl: 'scripts/about/about.html',
						controller: 'AboutController as vm'
					}
				}
			})
			.state('tab.ciaff', {
					url: '/about',
					views: {
						'menuContent': {
							templateUrl: 'scripts/about/ciaff.html',
							controller: 'AboutController as vm'
						}
					}
				});
		});
})();