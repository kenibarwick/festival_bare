(function() {
	'use strict';

	angular
		.module('barebone.elements')
		.controller('ElementsController', ElementsController);

		ElementsController.$inject = ['menuItems', 'motion'];

	/* @ngInject */
	function ElementsController(menuItems, motion) {
		var vm = angular.extend(this, {
			//TODO: add methods and properties to this controller
		});

		(function activate() {
			
		})();
	}
})();
