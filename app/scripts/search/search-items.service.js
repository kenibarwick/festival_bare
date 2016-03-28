(function() {
	'use strict';

	angular
		.module('barebone.search')
		.factory('searchItems', searchItems);

	searchItems.$inject = [];

	/* @ngInject */
	function searchItems() {
		var data = [{
			title: 'Friday',
			path: 'news',
			icon: 'ion-calendar'
		}, {
			title: 'Saturday',
			path: 'news',
			icon: 'ion-calendar'
		}, {
			title: 'Sunday',
			path: 'news',
			icon: 'ion-calendar'
		}, {
			title: '',
			path: 'search',
			icon: ''
		}, {
			title: 'Venues',
			path: 'venues',
			icon: 'ion-home'
		}, {
			title: 'Artists',
			path: 'news',
			icon: 'ion-person-stalker'
		}];

		return data;
	}
})();