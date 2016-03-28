(function() {
	'use strict';

	angular
		.module('barebone.home')
		.controller('HomeController', HomeController);

	HomeController.$inject = [
		'menuItems',
		'homeDataService',
		'externalAppsService',
		'$cordovaEmailComposer',
		'$timeout',
		'motion',
		'ionicMaterialMotion'
	];

	/* @ngInject */
	function HomeController(
		menuItems, homeDataService, externalAppsService, $cordovaEmailComposer, $timeout, motion, ionicMaterialMotion) {

		var vm = angular.extend(this, {
			entries: menuItems,
			phoneNumber: homeDataService.phoneNumber,
			getDirections: getDirections,
			sendEmail: sendEmail,
			openFacebookPage: openFacebookPage
		});

		(function activate() {
			motion.collapseHeader();
			motion.ink();

			$timeout(function() {
				ionicMaterialMotion.fadeSlideInRight({
					startVelocity: 3000
				});
			}, 200);
		})();

		// **********************************************************

		function getDirections() {
			externalAppsService.openMapsApp(homeDataService.officeLocation);
		}

		function sendEmail() {
			$cordovaEmailComposer.isAvailable().then(function() {
				var email = {
					to: homeDataService.email,
					subject: 'Chilled in a Field Festival 2016',
					body: '`									- via the mobile app'
				};

				$cordovaEmailComposer.open(email);
			});
		}

		function openFacebookPage() {
			externalAppsService.openExternalUrl(homeDataService.facebookPage);
		}
	}
})();