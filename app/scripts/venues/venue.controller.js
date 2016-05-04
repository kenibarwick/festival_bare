(function() {
	'use strict';

	angular
		.module('barebone.venues')
		.controller('VenueController', VenueController);

	VenueController.$inject = ['$scope', '$stateParams', 'venueService', 'motion', '$ionicPopup'];

	/* @ngInject */
	function VenueController($scope, $stateParams, venueService, motion, $ionicPopup, $http) {
		var vm = angular.extend(this, {
			venue: null,
		});

		// ********************************************************************
		
		var venueId = parseInt($stateParams.venueId);
		venueService.get(venueId)
			.then(function(venue) {
				vm.venue = venue;

				motion.expandHeader();
			});
	}
})();