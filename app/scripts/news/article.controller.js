(function() {
	'use strict';

	angular
		.module('barebone.news')
		.controller('ArticleController', ArticleController);

	ArticleController.$inject = 
<<<<<<< HEAD
	['$scope', '$stateParams', 'newsService', 'motion', '$ionicPopup', 'userService', '$linq'];
=======
		[
			'$scope', '$stateParams', 'newsService', 
			'motion', '$ionicPopup', 'userService', '$linq'
		];
>>>>>>> 3cafd20de777529ec074c3a3fc5619c1c48e480d

	/* @ngInject */
	function ArticleController($scope, $stateParams, newsService, motion, $ionicPopup, userService, $linq) {
		var vm = angular.extend(this, {
			article: null,
			favourite: favourite,
			isFavourite: false
		});

		// ********************************************************************
		
		var articleId = parseInt($stateParams.articleId);
		newsService.get(articleId)
			.then(function(article) {
				vm.article = article;

				var userString = window.localStorage['chilled_user'];
				var user = (userString) ? JSON.parse(userString) : newUser(userService);

				vm.isFavourite = $linq.Enumerable().From(user.favourites).Any(function (x) {
	                         return x.id === articleId;
	                     });
			});

		function favourite(article) {

			var userString = window.localStorage['chilled_user'];
			var user = (userString) ? JSON.parse(userString) : newUser(userService);

			var isSet = $linq.Enumerable().From(user.favourites).Any(function (x) {
                         return x.id === articleId;
                     });

			var message;

			if (!isSet)
			{
				var fav = { id : article.id, name : article.name };
				user.favourites.push( { id : article.id, name : article.name });

				// message = 'You will receive a notification when ' + article.name + ' is about to start';
				message = 'You will now find ' + article.name + " in your favourites list. They thank you :)";

				vm.isFavourite = true;
			}
			else
			{
				for(var i = 0; i < user.favourites.length; i++) {
					if (user.favourites[i].id === article.id) {
						user.favourites.splice(i, 1);	
					} 
				}

				// message = 'The reminder for ' + article.name + ' has been removed';
				message = article.name + " has been removed from your favourite list. What happend? Did they not send you a birthday card?";

				vm.isFavourite = false;
			}

			userService.save(user);
			
			window.localStorage['chilled_user'] = JSON.stringify(user);

			$ionicPopup.alert({
			     title: 'Favourite Set!',
			     template: message
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