(function() {
	'use strict';

	angular
		.module('barebone.venues')
		.controller('VenuesController', VenuesController);

	VenuesController.$inject = ['$scope', '$state', 'venueService', 'motion', '$timeout'];

	/* @ngInject */
	function VenuesController($scope, $state, venueService, motion, $timeout) {
		var vm = angular.extend(this, {
			venues: [],
			navigate: navigate,
			doRefresh: doRefresh
		});

		(function activate() {
			motion.expandHeader();

			loadVenues().then(function() {
				motion.showItems();
				motion.ink();
			});
		})();
		// ********************************************************************

		function loadVenues() {
			return venueService.all().then(function(data){
				vm.venues = data;
			});
		}

		function navigate(venueId) {
			$state.go('app.venue', { venueId: venueId });
		}

		function doRefresh() {
			setTimeout($scope.$broadcast('scroll.refreshComplete'), 16000);
		}
	}
})();