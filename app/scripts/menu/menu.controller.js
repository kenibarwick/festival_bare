(function() {
	'use strict';

	angular
		.module('barebone.menu')
		.controller('MenuController', MenuController);

	MenuController.$inject = [
								'$scope', 
								'menuDataService', 
								'externalAppsService', 
								'$cordovaEmailComposer', 
								'$timeout', 
								'motion', 
								'ionicMaterialMotion'];

	/* @ngInject */
	function MenuController(
								$scope, 
								menuDataService, 
								externalAppsService, 
								$cordovaEmailComposer, 
								$timeout, 
								motion, 
								ionicMaterialMotion) {
		
		var vm = angular.extend(this, {
			isExpanded: false,
		});

		$scope.$on('header-expanded', function(event, args) {
			vm.isExpanded = args.expanded;
		});		
	}
})();