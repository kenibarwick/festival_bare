(function() {
	'use strict';

	angular
		.module('barebone.sitemap', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
			.state('app.sitemap', {
				url: '/sitemap',
				views: {
					'menuContent': {
						templateUrl: 'scripts/sitemap/sitemap.html',
						controller: 'SitemapController as vm'
					}
				}
			});
		});
})();