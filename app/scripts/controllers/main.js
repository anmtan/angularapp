'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.rowCollection = [
        {rank: '1', program: 'NBC SUNDAY NIGHT FOOTBALL', network: 'NBC', rating: '11.4', viewers: '19,388'},
        {rank: '2', program: '60 MINUTES', network: 'CBS', rating: '11.1', viewers: '18,132'},
        {rank: '3', program: 'NCIS', network: 'CBS', rating: '10.2', viewers: '16,678'},
        {rank: '4', program: 'BIG BANG THEORY, THE', network: 'CBS', rating: '8.9', viewers: '14,915'},
        {rank: '5', program: 'DANCING WITH THE STARS', network: 'ABC', rating: '8.0', viewers: '12,633'},
        {rank: '6', program: 'SUNDAY NIGHT NFL PRE-KICK', network: 'NBC', rating: '7.9', viewers: '123.941'},
        {rank: '7', program: 'NCIS: NEW ORLEANS', network: 'CBS', rating: '7.8', viewers: '12,390'},
        {rank: '8', program: 'VOICE', network: 'NBC', rating: '7.2', viewers: '12,016'},
        {rank: '9', program: 'MADAM SECRETARY', network: 'CBS', rating: '6.8', viewers: '10,612'},
        {rank: '10', program: 'EMPIRE', network: 'FOX', rating: '6.7', viewers: '11,200'}
    ];
  }]);
