(function() {
	'use strict';

	angular
		.module('barebone.menu')
		.controller('MenuController', MenuController);

	MenuController.$inject = ['$scope', 'menuDataService', 'externalAppsService'];

	/* @ngInject */
	function MenuController($scope, menuDataService, externalAppsService) {
		var vm = angular.extend(this, {
			isExpanded: false
		});

		$scope.$on('header-expanded', function(event, args) {
			vm.isExpanded = args.expanded;
		});		
		
		function getDirections() {
			externalAppsService.openMapsApp(menuDataService.venuLocation);
		}
	}
})();