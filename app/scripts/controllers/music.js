'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('MusicCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('https://u6gs4zx71f.execute-api.us-west-2.amazonaws.com/production/musicratings').then(function(response){
        $scope.rowCollection = response.data;
    });
  }]);