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
			title: 'News',
			path: 'articles',
			icon: 'ion-ios-paper-outline'
		}, {
			title: 'Site Map',
			path: 'sitemap',
			icon: 'ion-map'
		}];

		return data;
	}
})();