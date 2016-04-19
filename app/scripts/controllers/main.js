'use strict';

/**
 * @ngdoc function
 * @name debanamenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the debanamenApp
 */

angular.module('debanamenApp').controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //final date
    $scope.date = new Date("May 30 2020").getTime();


    /*$scope.today = "M/d/yy h:mm:ss a";
    var date = new Date();
    var UTC = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    var newDate = new Date(UTC).setHours(UTC.getHours());
     $scope.today = UTC;*/


    $scope.kendokas = {};

    $http({
        method:"GET",
        url: "json/kendoka.json"
    }).success(function successCallback(data){
        $scope.kendokas = data.kendoka;
        console.log($scope.kendokas);
    }).then(function successCallback(response){

    }, function errorCallback(response){

    });


});
