(function() {
	'use strict';

	angular
		.module('barebone.news')
		.factory('userService', userService);

	userService.$inject = ['restangular'];

	/* @ngInject */
	function userService(Restangular) {
		var result = [];

		var service = {
			save: save
		};
		return service;

		function save(user){

			Restangular.Users.post(user)
		}
	}
})();