'use strict';

/**
 * @ngdoc function
 * @name debanamenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the debanamenApp
 */

angular.module('debanamenApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.today = "M/d/yy h:mm:ss a";
    var date = new Date();
    var UTC = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    var newDate = new Date(UTC).setHours(UTC.getHours());
     $scope.today = UTC;
  });
