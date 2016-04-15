(function() {
	'use strict';

	angular
		.module('barebone.home')
		.factory('menuDataService', menuDataService);

	menuDataService.$inject = [];

	/* @ngInject */
	function menuDataService() {
		return {
			phoneNumber: '+447795666588',
			email: 'it@chilledinafieldfestival.co.uk',
			venuLocation: '51.2007318, 0.3932167',
			facebookPage: 'https://www.facebook.com/ChilledInAField/'
		};
	}
})();