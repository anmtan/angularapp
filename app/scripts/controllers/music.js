'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('MusicCtrl', ['$scope', function ($scope) {
    $scope.rowCollection = [
        {rank: '1', rankLastWeek: '1', artist: 'ADELE', song: 'Hello'},
     	{rank: '2', rankLastWeek: '3', artist: 'JUSTIN BIEBER', song: 'Sorry'},
     	{rank: '3', rankLastWeek: '2', artist: 'CHRIS STAPLETON', song: 'Tennessee Whiskey'},
     	{rank: '4', rankLastWeek: '4', artist: 'DRAKE', song: 'Hotline Bling'},
     	{rank: '5', rankLastWeek: '6', artist: 'JUSTIN TIMBERLAKE', song: 'Hotline Bling'},
     	{rank: '6', rankLastWeek: '7', artist: 'MEGHAN TRAINOR FEATURING JOHN LEGEND', song: 'Like I\'m Gonna Lose You'},
     	{rank: '7', rankLastWeek: '10', artist: 'ELLE KING', song: 'Like I\'m Gonna Lose You'},
     	{rank: '8', rankLastWeek: '8', artist: 'SHAWN MENDES', song: 'Stitches'},
     	{rank: '9', rankLastWeek: '13', artist: 'JUSTIN BIEBER', song: 'What Do You Mean?'},
     	{rank: '10', rankLastWeek: '9', artist: 'THE WEEKND', song: 'What Do You Mean?'}
    ];
  }]);