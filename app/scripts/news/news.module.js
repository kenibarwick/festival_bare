(function() {
	'use strict';

	angular
		.module('barebone.news', [
			'ionic',
			'restangular'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.articles', {
					url: '/articles',
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

    		//RestangularProvider.setBaseUrl('http://localhost:8080/api/v1');
		});
})();