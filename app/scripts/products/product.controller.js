(function() {
	'use strict';

	angular
		.module('barebone.products')
		.controller('ProductController', ProductController);

	ProductController.$inject = ['$scope', '$stateParams', 'productsService', 'motion'];

	/* @ngInject */
	function ProductController($scope, $stateParams, productsService, motion) {
		var vm = angular.extend(this, {
			product: null
		});

		motion.expandHeader();
		// **********************************************

		var productId = parseInt($stateParams.productId);

		productsService.get(productId)
			.then(function(product) {
				vm.product = product;

				motion.expandHeader();
			});
		}
})();