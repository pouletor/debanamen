'use strict';

/**
 * @ngdoc function
 * @name debanamenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the debanamenApp
 */

angular.module('debanamenApp').controller('MainCtrl', function ($http) {
    var vm = this;

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //final date
    vm.date = new Date("May 30 2020").getTime();

    //date du jour
    vm.today = "M/d/yy h:mm:ss a";
    vm.today = new Date();
    /*var date = new Date();
    var UTC = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    var newDate = new Date(UTC).setHours(UTC.getHours());
     vm.today = UTC;*/


    vm.kendokas = {};

    $http({
        method:"GET",
        url: "json/kendoka.json"
    }).success(function successCallback(data){
        vm.kendokas = data.kendoka;
        console.log(vm.kendokas);
    }).then(function successCallback(response){

    }, function errorCallback(response){

    });


});
