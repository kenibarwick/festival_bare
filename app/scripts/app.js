// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
	'ionic',
	'ionic-material',
	'config',
	'barebone.elements',
	'barebone.home',
	'barebone.map',
	'barebone.menu',
	'barebone.news',
	'barebone.position',
	'barebone.products',
	'barebone.push',
	'barebone.search',
	'gMaps',
	'ngCordova'
])

.value('_', window._)

.controller('starter', ['$scope', '$ionicPlatform', '$cordovaDevice', function($scope, $ionicPlatform, $cordovaDevice) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)

		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}

		 $scope.$apply(function() {
            // sometimes binding does not work! :/
 
            // getting device infor from $cordovaDevice
            var device = $cordovaDevice.getDevice();
 
            $scope.manufacturer = device.manufacturer;
            $scope.model = device.model;
            $scope.platform = device.platform;
            $scope.uuid = device.uuid;
 
        });

		ionic.Platform.device().exitApp(); 

	});
}])

.config(function($ionicConfigProvider, $urlRouterProvider) {
	$ionicConfigProvider.views.maxCache(0);
	$urlRouterProvider.otherwise('/app/home');
});