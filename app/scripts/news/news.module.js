(function() {
	'use strict';

	angular
		.module('barebone.news', [
			'ionic',
			'restangular',
			'angular-linq'
		])
		.config(function($stateProvider, RestangularProvider) {
			$stateProvider
				.state('app.articles', {
					url: '/friday',
					views: {
						'menuContent': {
							templateUrl: 'scripts/news/articles.html',
							controller: 'ArticlesController as vm'
						}
					},
					'test':'friday day'
				})
				.state('app.saturday', {
					url: '/saturday',
					views: {
						'menuContent': {
							templateUrl: 'scripts/news/articles.html',
							controller: 'ArticlesController as vm'
						}
					},
					'test':'saturday day'
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

    		RestangularProvider.setBaseUrl('http://chilled-schedule.azurewebsites.net/acts/');
		});
})();