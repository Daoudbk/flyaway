'use strict';
angular.module('app').controller('searchController', function ($scope, $location) {
  $scope.flight = {
    from: 'Spain',
    to: 'Anywhere',
    range: '0'
  };

  $scope.findFlights = function () {
    $scope.slide = 'slide-left';
    $location.url('flight')
  }
});
