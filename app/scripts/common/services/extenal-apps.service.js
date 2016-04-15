(function() {
	'use strict';

	angular
		.module('barebone.common')
		.factory('externalAppsService', externalAppsService);

	externalAppsService.$inject = ['$window'];

	/* @ngInject */
	function externalAppsService($window) {
		var service = {
			openMapsApp: openMapsApp,
			openExternalUrl: openExternalUrl
		};
		return service;

		////////////////

		function openMapsApp(coords) {
			var q;
			if (ionic.Platform.isAndroid()) {
				q = 'geo:' + coords;
			} else {
				q = 'maps://maps.apple.com/?q=' + coords;
			}
			console.log(q);
			$window.location.href = q;
		}

		function openExternalUrl(url) {
			console.log(url);
			$window.open(url, '_system', 'location=yes');
			return false;
		}
	}
})();