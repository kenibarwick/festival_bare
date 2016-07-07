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
<<<<<<< HEAD
			path: 'all',
=======
			path: 'artists',
>>>>>>> 3cafd20de777529ec074c3a3fc5619c1c48e480d
			icon: 'ion-person-stalker'
		}];

		return data;
	}
})();