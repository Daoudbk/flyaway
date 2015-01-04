'use strict';
angular.module('app').controller('searchController', function ($scope, $location, $mdSidenav) {
  $scope.flight = {
    from: 'Spain',
    to: 'Anywhere',
    range: '0',
    month: 'December'
  };
  $scope.months = getMonths();

  $scope.findFlights = function () {
    $scope.slide = 'slide-left';
    $location.url('flight')
  };

  $scope.showLeftMenu = function () {
    $mdSidenav('left').toggle()
  };

  function getMonths() {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
});
