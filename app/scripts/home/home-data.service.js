(function() {
	'use strict';

	angular
		.module('barebone.home')
		.factory('homeDataService', homeDataService);

	homeDataService.$inject = [];

	/* @ngInject */
	function homeDataService() {
		return {
			phoneNumber: '+447795666588',
			email: 'it@chilledinafieldfestival.co.uk',
			officeLocation: '51.2007318, 0.3932167',
			facebookPage: 'https://www.facebook.com/ChilledInAField/'
		};
	}
})();