(function() {
	'use strict';

	angular
		.module('barebone.products')
		.factory('productsService', productsService);

	productsService.$inject = ['$http', '$q', 'Restangular'];


	/* @ngInject */
<<<<<<< HEAD
	function productsService($q, $http) {
=======
	function productsService($http, $q, Restangular) {
		// var url = 'http://skounis.s3.amazonaws.com/mobile-apps/barebone-glossy/products.json';
>>>>>>> 3cafd20de777529ec074c3a3fc5619c1c48e480d
		var url = 'http://chilled-schedule.azurewebsites.net/locations';
		var result = [];

		var service = {
			all: all,
			get: get
		};
		return service;

<<<<<<< HEAD
		// ******************************************************************

		// http://stackoverflow.com/questions/17533888/s3-access-control-allow-origin-header
		function all() {
			var deferred = $q.defer();			
			$http.get(url)
				.success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					result = data;
					console.log(result);
					deferred.resolve(result);
				})
				.error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					console.log('ERROR (News):' + status);
					deferred.reject(result);
=======
		function all(){

			var deferred = $q.defer();

			Restangular.all('locations').getList()
				.then(function (locations) {
					window.localStorage['chilled_locations'] = JSON.stringify(locations);
					result = locations;
					deferred.resolve(locations);
				}, function(response) {
					var locationsString = window.localStorage['chilled_locations'];
					var locations = JSON.parse(locationsString);
					result = locations;
					deferred.resolve(locations);
>>>>>>> 3cafd20de777529ec074c3a3fc5619c1c48e480d
				});

			return deferred.promise;
		}

		function get(locationId) {
			// we take an article from cache but we can request ir from the server
			for (var i = 0; i < result.length; i++) {
				if (result[i].id === locationId) {
					return $q.when(result[i]);
				}
			}
			return $q.when(null);
		}
	}
})();