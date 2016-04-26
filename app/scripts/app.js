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
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        /*.when('/kendoka/', {
            templateUrl: 'views/kendoka.html',
            controller: 'UserCtrl'
        })*/
        .when('/kendoka/:characterId', {
            templateUrl: 'views/kendoka.html',
            controller: 'UserCtrl',
            controllerAs: 'user'
        })
        .when('/sensei/', {
            templateUrl: 'views/sensei.html',
            controller: 'SupUserCtrl',
            controllerAs: 'supUser'
        })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
          controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
