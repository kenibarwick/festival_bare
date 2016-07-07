(function() {
	'use strict';

	var watch;

	angular
		.module('barebone.position')
		.controller('PositionController', PositionController);

	PositionController.$inject = ['$cordovaGeolocation', '$ionicLoading', 'motion'];

	/* @ngInject */
	function PositionController($cordovaGeolocation, $ionicLoading, motion) {
		var vm = angular.extend(this, {
			params: []
		});

		console.log('Before activation ...');
		(function activate() {
			

			$ionicLoading.show({
				duration: 3000,
				template: 'Searching for location ...'
			});

			if (watch) {
				watch.clearWatch();
				watch = null;
			}

			getCurrentPosition().then(function() {
				startWatching();
			});
		})();
		// ********************************************************************

		function getCurrentPosition() {
			var posOptions = {
				timeout: 10000,
				enableHighAccuracy: false
			};
			return $cordovaGeolocation
				.getCurrentPosition(posOptions)
				.then(processGeolocation);
		}

		function startWatching() {
			var watchOptions = {
				frequency: 1000,
				timeout: 3000,
				enableHighAccuracy: false // may cause errors if true
			};

			if (!watch) {
				watch = $cordovaGeolocation.watchPosition(watchOptions);
				watch.then(null,
					function(err) {
						$ionicLoading.hide();
						console.log('Error while watching for position changes: ' + JSON.stringify(err));
				},
					processGeolocation);
			}
		}

		function processGeolocation(position) {
			$ionicLoading.hide();
			var params = [];
			for (var key = 0; key < position.coords.length; key++) {
				params.push({
					key: key,
					value: position.coords[key]
				});
			}
			var date = new Date(position.timestamp);
			params.push({
				key: 'timestamp',
				value: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
			});
			vm.params = params;
		}
	}
})();
