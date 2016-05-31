(function() {
	'use strict';

	angular
		.module('barebone.news')
		.controller('ArticleController', ArticleController);

	ArticleController.$inject = ['$scope', '$stateParams', 'newsService', 'motion', '$ionicPopup', 'userService', '$linq'];

	/* @ngInject */
	function ArticleController($scope, $stateParams, newsService, motion, $ionicPopup, userService, $linq) {
		var vm = angular.extend(this, {
			article: null,
			favourite: favourite,
			share: share,
		});

		// ********************************************************************
		
		var articleId = parseInt($stateParams.articleId);
		newsService.get(articleId)
			.then(function(article) {
				vm.article = article;

				motion.expandHeader();
			});

		function share(article) {
			console.log('Share started: ');
			console.log(article.name);
			// this is the complete list of currently supported params you can pass to the plugin (all optional)
			var options = {
			  message: 'article.name', // not supported on some apps (Facebook, Instagram)
			  subject: 'article.description', // fi. for email
			  files: ['', ''], // an array of filenames either locally or remotely
			  url: 'article.name',
			  chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
			};

			var onSuccess = function(result) {
			  console.log('Share completed? ' + result.completed); // On Android apps mostly return false even while it's true
			  console.log('Shared to app: ' + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
			};

			var onError = function(msg) {
			  console.log('Sharing failed with message: ' + msg);
			};

			window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
		}
			
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

				message = 'You will receive a notification when ' + article.name + ' is about to start';
			}
			else
			{
				for(var i = 0; i < user.favourites.length; i++) {
					if (user.favourites[i].id === article.id) {
						user.favourites.splice(i, 1);	
					} 
				}

				message = 'The reminder for ' + article.name + ' has been removed';
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