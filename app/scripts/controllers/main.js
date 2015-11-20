'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('https://u6gs4zx71f.execute-api.us-west-2.amazonaws.com/production/tvratings').then(function(response){
        $scope.rowCollection = response.data;
    });
  }]);
