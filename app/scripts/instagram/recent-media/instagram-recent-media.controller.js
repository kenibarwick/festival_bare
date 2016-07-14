(function() {
	'use strict';

	angular
		.module('barebone.instagram')
		.controller('InstagramRecentMediaController', InstagramRecentMediaController);

	InstagramRecentMediaController.$inject = ['$scope', 'instagramService', '$http', 'motion', '$timeout'];

	/* @ngInject */
	function InstagramRecentMediaController($scope, instagramService, $http, motion, $timeout) {
		var vm = angular.extend(this, {
			mediaList: [],
			doRefresh: doRefresh
		});

		(function activate() {
			motion.expandHeader();

			getRecentMedia().then(function() {
				motion.ink();
			});
		})();

		// ********************************************************************

		function getRecentMedia() {
			return instagramService.getRecentMedia().then(function(list) {
				vm.mediaList = list;
			});
		}

		function doRefresh() {
			getRecentMedia().then(function() {
				$scope.$broadcast('scroll.refreshComplete');
			});
		}
	}
})();