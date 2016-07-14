(function() {
	'use strict';

	angular
		.module('barebone.products')
		.controller('ProductsController', ProductsController);

	ProductsController.$inject = ['$scope', '$state', 'productsService', '$timeout', 'motion', 'ionicMaterialMotion', '$ionicPopup', '$location', '$linq', '$q'];

	/* @ngInject */
	function ProductsController($scope, $state, productsService, $timeout, motion, ionicMaterialMotion, $ionicPopup, $location, $linq, $q) {

		var vm = angular.extend(this, {
			products: [],
			navigate: navigate,
			doRefresh: doRefresh
		});

		(function activate() {

    		var canceler = $q.defer();
		  
		    var timeoutPromise = $timeout(function() {
		      canceler.resolve(); //aborts the request when timed out
		      console.log('Timed out');
		    }, 10000); 	// we set a timeout for 10s and store the promise in order 
						// to be cancelled later if the data does not arrive within 250ms


<<<<<<< HEAD
		productsService.all(function(data) {
			vm.products = data;
			console.log(data);
			$timeout(function() {
				ionicMaterialMotion.fadeSlideInRight({
					selector: '.animate-fade-slide-in .item'
=======
			loadLocations().then(function() {
				motion.showItems();
				motion.ink();

				$timeout.cancel(timeoutPromise);
			}, function(response) {
				$ionicPopup.alert({
			    	title: 'there was an error Set!',
			     	template: response
>>>>>>> 3cafd20de777529ec074c3a3fc5619c1c48e480d
				});
			});
		
		})();


		function loadLocations() {
			return productsService.all().then(function(data){
				vm.products = $linq.Enumerable().From(data).ToArray();
			});
		}
	
		function doRefresh() {
			setTimeout($scope.$broadcast('scroll.refreshComplete'), 16000);
		}

		function navigate(productId) {
			$state.go('app.product', { productId: productId });
		}

	}
})();