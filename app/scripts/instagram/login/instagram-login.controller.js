(function() {
	'use strict';

	angular
		.module('barebone.instagram')
		.controller('InstagramLoginController', InstagramLoginController);

	InstagramLoginController.$inject = ['$state', 'instagramService', 'motion'];

	/* @ngInject */
	function InstagramLoginController($state, instagramService, motion) {
		var vm = angular.extend(this, {
			login: login,
			logout: logout,
			showRecentMedia: showRecentMedia,
			accessToken: instagramService.getAccessToken(),
			profile: null,
			isAuthorized: false
		});

		(function activate() {
			vm.isAuthorized = instagramService.isAuthorized();

			// motion.expandHeader();
			motion.ink();
		})();
		// ********************************************************************

		function showRecentMedia() {
			$state.go('app.instagram-recent-media');
		}

		function logout() {
			instagramService.logout();
			vm.accessToken = null;
			vm.isAuthorized = false;
		}

		function login() {
			instagramService.login().then(function(result) {
				if (result['access_token']){
					vm.accessToken = result['access_token'];
					vm.isAuthorized = true;
				} else {
					vm.accessToken = null;
					vm.isAuthorized = false;
				}


			});
		}
	}
})();
