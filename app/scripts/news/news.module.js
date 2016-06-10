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

    		RestangularProvider.setBaseUrl('http://localhost:8080/');

    		//localStorage.removeItem('chilled_user');

    		//RestangularProvider.setBaseUrl('http://chilled-schedule.azurewebsites.net/');
    		RestangularProvider.setDefaultHttpFields({ timeout: 2000 })
		});
})();