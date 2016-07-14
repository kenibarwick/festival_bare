(function() {
	'use strict';

	angular
		.module('barebone.search')
		.controller('SearchController', SearchController);

	SearchController.$inject = [
		'searchItems',
		'$timeout',
		'motion',
		'ionicMaterialMotion'
	];

	/* @ngInject */
	function SearchController(
		searchItems, $timeout, motion, ionicMaterialMotion) {

		var vm = angular.extend(this, {
			entries: searchItems
		});

		(function activate() {
			motion.collapseHeader();
			motion.ink();

			$timeout(function() {
				ionicMaterialMotion.fadeSlideInRight({
					startVelocity: 3000
				});
			}, 200);
		})();		
	}
	
})();