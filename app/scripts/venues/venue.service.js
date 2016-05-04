(function() {
	'use strict';

	angular
		.module('barebone.venues')
		.factory('venueService', venueService);

	venueService.$inject = ['$http', '$q'];

	/* @ngInject */
	function venueService($http, $q) {
		var url = 'http://chilled-schedule.azurewebsites.net/locations';
		var result = [];

		var service = {
			all: all,
			get: get
		};
		return service;

		// *******************************************************

		// http://stackoverflow.com/questions/17533888/s3-access-control-allow-origin-header
		function all(){
			var deferred = $q.defer();
			$http.get(url)
				.success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					result = data;
					deferred.resolve(result);
				})
				.error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					console.log('ERROR (Venues):' + status);
					deferred.reject(result);
				});

			return deferred.promise;
		}

		function get(venueId) {
			// we take an article from cache but we can request ir from the server
			console.log(venueId);
			for (var i = 0; i < result.length; i++) {
				if (result[i].id === venueId) {
					return $q.when(result[i]);
				}
			}
			return $q.when(null);
		}
	}
})();