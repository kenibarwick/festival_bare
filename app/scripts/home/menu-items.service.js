(function() {
	'use strict';

	angular
		.module('barebone.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'Favourites',
			path: 'favourites',
			icon: 'ion-heart'
		}, {
			title: 'Whats on',
			path: 'search',
			icon: 'ion-music-note'
		}, {
			title: 'Information',
			path: 'info',
			icon: 'ion-information-circled'
		}, {
			title: 'Weekend Programme',
			path: 'sitemap',
			icon: 'ion-ios-book'
		}];

		return data;
	}
})();