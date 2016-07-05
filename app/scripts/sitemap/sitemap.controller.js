(function() {
	'use strict';

	angular
		.module('barebone.sitemap')
		.controller('SitemapController', SitemapController);

	SitemapController.$inject = ['$scope', 'sitemapService', 'motion'];

	/* @ngInject */
	function SitemapController($scope, sitemapService, motion) {
		
	}
})();