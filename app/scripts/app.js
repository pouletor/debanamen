'use strict';

/**
 * @ngdoc overview
 * @name debanamenApp
 * @description
 * # debanamenApp
 *
 * Main module of the application.
 */
angular
  .module('debanamenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
      'timer'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/kendoka/', {
            templateUrl: 'views/kendoka.html',
            controller: 'UserCtrl'
        })
        .when('/sensei/', {
            templateUrl: 'views/sensei.html',
            controller: 'SupUserCtrl'
        })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
