'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
  .controller('BookCtrl', ['$scope', '$http', function ($scope, $http) {
    // $scope.rowCollection = [
    //     {rank: '1', Author: 'Ree Drummond', title: 'The Pioneer Woman Cooks (Hardcover)', publisher: 'William Morrow & Company', publicationDate: '01-Oct-2015'},
    //  	{rank: '2', Author: 'Bill O\'Reilly', title: 'Killing Reagan (Hardcover)', publisher: 'Henry Holt & Company', publicationDate: '01-Sep-2015'},
    //  	{rank: '3', Author: 'Leah Remini', title: 'Troublemaker (Hardcover)', publisher: 'Ballantine Books', publicationDate: '01-Nov-2015'},
    //  	{rank: '4', Author: 'Brian Kilmeade', title: 'Thomas Jefferson and The Tripo (Hardcover)', publisher: 'Sentinel', publicationDate: '01-Nov-2015'},
    //  	{rank: '5', Author: 'Johanna Basford', title: 'Lost Ocean (Trade Paperback)', publisher: 'Penguin Books', publicationDate: '01-Oct-2015'},
    //  	{rank: '6', Author: 'Donald J. Trump', title: 'Crippled America (Hardcover)', publisher: 'Threshold Editions', publicationDate: '01-Nov-2015'},
    //  	{rank: '7', Author: 'Ben Carson', title: 'A More Perfect Union (Hardcover)', publisher: 'Sentinel', publicationDate: '01-Oct-2015'},
    //  	{rank: '8', Author: 'Marie Kondo', title: 'The Life-Changing Magic of Tid (Hardcover)', publisher: 'Ten Speed Press', publicationDate: '01-Oct-2014'},
    //  	{rank: '9', Author: 'Guiness World Records', title: 'Guiness World Records (Hardcover)', publisher: 'Guiness World Records', publicationDate: '01-Sep-2015'},
    //  	{rank: '10', Author: 'Jocko Willink', title: 'Extreme Ownership (Hardcover)', publisher: 'St. Martin\'s Press', publicationDate: '01-Oct-2015'}
    // ];

    $http.get('https://u6gs4zx71f.execute-api.us-west-2.amazonaws.com/production/bookratings').then(function(response){
        $scope.rowCollection = response.data;
    });
  }]);