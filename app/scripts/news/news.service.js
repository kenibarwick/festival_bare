   (function() {
       'use strict';
   
       angular
           .module('barebone.news')
           .factory('newsService', newsService);
   
    newsService.$inject = ['$http', '$q', 'Restangular'];
   
       /* @ngInject */
    function newsService($http, $q, Restangular) {
           //var url = 'http://localhost:8080/acts';
           var url = 'http://chilled-schedule.azurewebsites.net/acts';
   
           var result = [];
   
           var service = {
               all: all,
               get: get
           };
           return service;
   
           // *******************************************************
   
           // http://stackoverflow.com/questions/17533888/s3-access-control-allow-origin-header
           function all(){
               var deferred = $q.defer();
   
              Restangular.all('acts').getList()
                  .then(function (acts) {
                      window.localStorage['chilled_acts'] = JSON.stringify(acts);
                      result = acts;
                      deferred.resolve(acts);
                  }, function(response) {
                      var actsString = window.localStorage['chilled_acts'];
                      var acts = JSON.parse(actsString);
                      result = acts;
                      deferred.resolve(acts);
                   });
   
  
              // $http.get(url)
              //     .success(function(data, status, headers, config) {
              //         // this callback will be called asynchronously
              //         // when the response is available
              //         result = data;
              //         deferred.resolve(result);
              //     })
              //     .error(function(data, status, headers, config) {
              //         // called asynchronously if an error occurs
              //         // or server returns response with an error status.
              //         console.log('ERROR (News):'  status);
              //         deferred.reject(result);
              //     });
  
               return deferred.promise;
           }
   
           function get(articleId) {
               // we take an article from cache but we can request ir from the server
               for (var i = 0; i < result.length; i++) {
                   if (result[i].id === articleId) {
                       return $q.when(result[i]);
                   }
               }
               return $q.when(null);
           }
       }
   })();
