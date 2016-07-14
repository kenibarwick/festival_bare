(function() {
	'use strict';

	angular
		.module('chilled.about')
		.controller('AboutController', AboutController);

	AboutController.$inject = ['$scope', 'aboutService', 'motion'];

	/* @ngInject */
	function AboutController($scope, aboutService, motion) {
	
<<<<<<< HEAD
			
=======
			motion.expandHeader();
>>>>>>> 8ee0b4f232ae2077faaa405ea925ad48642e4dc2
	
	}
})();