'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('MovieCtrl', ['$scope', function ($scope) {
    $scope.rowCollection = [
        {rank: '1', rankLastWeek: ' ', title: 'Inside Out', distributor: 'DISNEY/BUENA VISTA HOME VIDEO'},
     	{rank: '2', rankLastWeek: '1', title: 'Jurassic World', distributor: 'UNIVERSAL HOME ENTERTAINMENT'},
     	{rank: '3', rankLastWeek: ' ', title: 'Vacation', distributor: 'WARNER HOME VIDEO'},
     	{rank: '4', rankLastWeek: '2', title: 'Pixels', distributor: 'SONY PICTURES HOME ENT'},
     	{rank: '5', rankLastWeek: '3', title: 'Max', distributor: 'WARNER HOME VIDEO'},
     	{rank: '6', rankLastWeek: '4', title: 'Southpaw', distributor: 'ANCHOR BAY ENTERTAINMENT'},
     	{rank: '7', rankLastWeek: '5', title: 'San Andreas', distributor: 'WARNER HOME VIDEO'},
     	{rank: '8', rankLastWeek: '6', title: 'Avengers: Age of Ultron', distributor: 'DISNEY/BUENA VISTA HOME VIDEO'},
     	{rank: '9', rankLastWeek: '8', title: 'Aladdin', distributor: 'DISNEY/BUENA VISTA HOME VIDEO'},
     	{rank: '10', rankLastWeek: ' ', title: 'Toy Story That Time Forgot', distributor: 'DISNEY/BUENA VISTA HOME VIDEO'}
    ];
  }]);