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
			path: 'friday',
			icon: 'ion-calendar'
		}, {
			title: 'Saturday',
			path: 'saturday',
			icon: 'ion-calendar'
		}, {
			title: 'Sunday',
			path: 'sunday',
			icon: 'ion-calendar'
		}, {
			title: 'Venues',
			path: 'venues',
			icon: 'ion-home'
		}, {
			title: 'Artists',
			path: 'all',
			icon: 'ion-person-stalker'
		}];

		return data;
	}
})();