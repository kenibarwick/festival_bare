(function() {
	'use strict';

	angular
		.module('barebone.menu', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app', {
					url: '/app',
					abstract: true,
					templateUrl: 'scripts/menu/menu.html',
					controller: 'MenuController as vm'
				});
		});
})();