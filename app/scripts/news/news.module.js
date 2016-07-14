(function() {
	'use strict';

	angular
		.module('barebone.news', [
			'ionic',
			'restangular',
			'angular-linq',
			'angularMoment'
		])
		.config(function($stateProvider, RestangularProvider) {
			$stateProvider
				.state('app.friday', {
					url: '/friday',
					views: {
						'menuContent': {
							templateUrl: 'scripts/news/articles.html',
							controller: 'ArticlesController as vm'
						}
					}
				})
				.state('app.saturday', {
					url: '/saturday',
					views: {
						'menuContent': {
							templateUrl: 'scripts/news/articles.html',
							controller: 'ArticlesController as vm'
						}
					}
				})
				.state('app.sunday', {
					url: '/sunday',
					views: {
						'menuContent': {
							templateUrl: 'scripts/news/articles.html',
							controller: 'ArticlesController as vm'
						}
					}
				})
				.state('app.artists', {
					url: '/artists',
					views: {
						'menuContent': {
							templateUrl: 'scripts/news/articles.html',
							controller: 'ArticlesController as vm'
						}
					}
				})
				.state('app.article', {
					url: '/articles/:articleId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/news/article.html',
							controller: 'ArticleController as vm'
						}
					}
				});

    		//RestangularProvider.setBaseUrl('http://localhost:8080/');

    		//localStorage.removeItem('chilled_user');

    		RestangularProvider.setBaseUrl('http://chilled-schedule.azurewebsites.net/');
<<<<<<< HEAD
    		RestangularProvider.setDefaultHttpFields({ timeout: 2000 });
		});
=======
    		RestangularProvider.setDefaultHttpFields({ timeout: 10000 });
		})
	.filter('favouriteHighlight', function()
		{
			return function(input) {
				return input ? '*' : ''
			}
		})
>>>>>>> 3cafd20de777529ec074c3a3fc5619c1c48e480d
})();