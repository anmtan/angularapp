'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('MovieCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('https://u6gs4zx71f.execute-api.us-west-2.amazonaws.com/production/movieratings').then(function(response){
        $scope.rowCollection = response.data;
    });
  }]);