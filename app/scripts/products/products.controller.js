(function() {
	'use strict';

	angular
		.module('barebone.products')
		.controller('ProductsController', ProductsController);

	ProductsController.$inject = ['$scope', 'productsService', '$timeout', 'motion', 'ionicMaterialMotion'];

	/* @ngInject */
	function ProductsController($scope, productsService, $timeout, motion, ionicMaterialMotion) {
		var vm = angular.extend(this, {
			products: [],
			doRefresh: doRefresh
		});

		motion.expandHeader();
		// ******************************************************

		productsService.all(function(data) {
			vm.products = data;
			console.log(data);
			$timeout(function() {
				ionicMaterialMotion.fadeSlideInRight({
					selector: '.animate-fade-slide-in .item'
				});
			}, 200);
		});

		function doRefresh() {
			setTimeout($scope.$broadcast('scroll.refreshComplete'), 16000);
		}
	}
})();