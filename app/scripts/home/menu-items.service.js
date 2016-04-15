(function() {
	'use strict';

	angular
		.module('barebone.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'Artists',
			path: 'articles',
			icon: 'ion-android-people'
		}, {
			title: 'Venues',
			path: 'products',
			icon: 'ion-music-note'
		}, {
			title: 'Sorted',
			path: 'search',
			icon: 'ion-search'
		}, {
			title: 'Site Map',
			path: 'sitemap',
			icon: 'ion-map'
		}];

		return data;
	}
})();