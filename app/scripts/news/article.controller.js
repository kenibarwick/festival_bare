(function() {
	'use strict';

	angular
		.module('barebone.news')
		.controller('ArticleController', ArticleController);

	ArticleController.$inject = 
		[
			'$scope', '$stateParams', 'newsService', 'motion', '$ionicPopup', 'userService', '$linq', '$cordovaLocalNotification' 
		];

	/* @ngInject */
	function ArticleController($scope, $stateParams, newsService, motion, $ionicPopup, userService, $linq, $cordovaLocalNotification) {
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

				article.start = new Date(new Date().getTime() + 6*60000);

				var start = new Date(new Date(article.start).getTime() - 5*60000);
				article.end = start;

				message = 'You will receive a notification when ' + article.name + ' is about to start. They thank you :)';
							
				var notificationMessage = article.name + ' at the ' + article.location + ' will start in 5 minutes';

				//$cordovaLocalNotification.hasPermission(function (granted) {
				
				$cordovaLocalNotification.add({
			        id: article.id,
			        title: "Chilled in a Field Reminder",
			        text: notificationMessage,
			        at: start
			    });

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

				$cordovaLocalNotification.cancel(article.id);

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