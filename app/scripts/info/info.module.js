(function() {
	'use strict';

	angular
		.module('chilled.info', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
			.state('app.info', {
				url: '/info',
				views: {
					'menuContent': {
						templateUrl: 'scripts/info/info.html',
						controller: 'InfoController as vm'
					}
				}
			})
			.state('tab.ciaff', {
				url: '/ciaff',
				views: {
					'menuContent': {
						templateUrl: 'scripts/info/ciaff.html',
						controller: 'InfoController as vm'
					}
				}
				});
		});
		
		$urlRouterProvider.otherwise("/ciaff");
})();