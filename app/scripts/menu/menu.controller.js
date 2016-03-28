(function() {
	'use strict';

	angular
		.module('barebone.menu')
		.controller('MenuController', MenuController);

	MenuController.$inject = ['$scope'];

	/* @ngInject */
	function MenuController($scope) {
		var vm = angular.extend(this, {
			isExpanded: false
		});

		$scope.$on('header-expanded', function(event, args) {
			vm.isExpanded = args.expanded;
		});
	}
})();