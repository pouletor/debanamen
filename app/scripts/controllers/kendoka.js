'use strict';

/**
 * @ngdoc function
 * @name debanamenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the debanamenApp
 */

angular.module('debanamenApp').controller('UserCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.test = "kendoka page .html";


});
