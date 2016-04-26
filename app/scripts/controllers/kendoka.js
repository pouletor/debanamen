'use strict';

/**
 * @ngdoc function
 * @name debanamenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the debanamenApp
 */

angular.module('debanamenApp').controller('UserCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.test = "kendoka page .html";

    $scope.characterId = $routeParams.characterId;
    console.log($scope.characterId);

    $scope.character = {};

    console.log("location");
    console.log($location);
    console.log($location.absUrl());
    console.log($location.url());
    console.log($location.path());

    $http({
        method:"GET",
        url: "json/kendoka.json"
    }).success(function successCallback(data){
        $scope.character = data.kendoka[$scope.characterId];
        console.log($scope.character);
    }).then(function successCallback(response){

    }, function errorCallback(response){

    });


}]);
