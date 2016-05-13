(function() {
	'use strict';

	angular
		.module('barebone.products')
		.factory('productsService', productsService);

	productsService.$inject = ['$http', '$q', 'Restangular'];


	/* @ngInject */
	function productsService($http, $q, Restangular) {
		// var url = 'http://skounis.s3.amazonaws.com/mobile-apps/barebone-glossy/products.json';
		var url = 'http://chilled-schedule.azurewebsites.net/locations';
		var result = [];

		var service = {
			all: all,
			get: get
		};
		return service;

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