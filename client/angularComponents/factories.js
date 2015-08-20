angular.module('factory', [])
  .factory('LoginFactory', loginController)
  .service('ResultsService', resultsService)
  .service('SessionService', sessionService);

/**
 * Login controller; inject $http
 */
loginController.$inject = ['$http'];
function loginController($http) {
  var authenticate = function(username, password) {
    return $http({
      url: '/login',
      method: 'POST',
      data: {userName: username, password: password},
      success: function(res) {
        console.log("authentication successful: ", res);
        return res;
      },
      error: function(err) {
        console.log("err=", err);
      }
    });
  }

  return {
    authenticate: authenticate
  };
}

/**
 * SessionService
 */
function sessionService() {

  this.setUserLoggedIn = function(value) {
    window.localStorage.setItem('userLoggedIn', value)
  };

  this.getUserLoggedIn = function() {
    return window.localStorage.getItem('userLoggedIn');
  }

  return this;
}

/**
 * ResultsService
 */
function resultsService() {
  var results = {};

  this.setResults = function(results) {
    this.results = results;
  }

  this.getResults = function() {
    return this.results;
  }
}
