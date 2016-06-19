(function() {
	'use strict';

	angular
		.module('barebone.products', [
			'ionic',
			'restangular'
		])
		.config(function($stateProvider, RestangularProvider) {
			$stateProvider
				.state('app.products', {
					url: '/products',
					views: {
						'menuContent': {
							templateUrl: 'scripts/products/products.html',
							controller: 'ProductsController as vm'
						}
					}
				})
				.state('app.product', {
					url: '/product/:productId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/products/product.html',
							controller: 'ProductController as vm'
						}
					}
				});


    		//RestangularProvider.setBaseUrl('http://localhost:8080/');

    		//localStorage.removeItem('chilled_user');

    		RestangularProvider.setBaseUrl('http://chilled-schedule.azurewebsites.net/');
    		RestangularProvider.setDefaultHttpFields({ timeout: 10000 });

		});

})();