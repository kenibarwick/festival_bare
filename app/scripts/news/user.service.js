(function() {
	'use strict';

	angular
		.module('barebone.news')
		.factory('userService', userService);

	userService.$inject = ['Restangular'];

	/* @ngInject */
	function userService(Restangular) {
		var result = [];

		var service = {
			save: save
		};
		return service;

		function save(user){

			Restangular.service('users').post(user);
		}
	}
})();