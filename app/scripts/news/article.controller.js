(function() {
	'use strict';

	angular
		.module('barebone.news')
		.controller('ArticleController', ArticleController);

	ArticleController.$inject = ['$scope', '$stateParams', 'newsService', 'motion', '$ionicPopup', 'userService'];

	/* @ngInject */
	function ArticleController($scope, $stateParams, newsService, motion, $ionicPopup, userService) {
		var vm = angular.extend(this, {
			article: null,
			favourite: favourite,
		});

		// ********************************************************************
		
		var articleId = parseInt($stateParams.articleId);
		newsService.get(articleId)
			.then(function(article) {
				vm.article = article;

				motion.expandHeader();
			});

		function favourite(article) {

			//var userString = window.localStorage['userTest'];
			//var user = (userString) ? JSON.parse(userString) : newUser();

			var user = newUser(userService);
			user.favourites.push(article.id)
			userService.save(user);
			// window.localStorage['userTest'] = JSON.stringify(user);
			// var message = 'You will receive a notification when ' + article.name + ' is about to start on device ' + JSON.stringify(user);

			$ionicPopup.alert({
			     title: 'Favourite Set!',
			     template: user
			});
		}
	}

})();


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function newUser(userService) {

	var userId = guid();
	var user = { 
		name : 'from simulator',
		deviceId : userId, 
		favourites : [] 
	};

	userService.save(user);

	return user;
}