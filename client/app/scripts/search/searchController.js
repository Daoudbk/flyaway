'use strict';
angular.module('app').controller('searchController', function ($scope, $location, $mdSidenav, searchService) {
  $scope.months = getMonths();

  $scope.getSearchQuery = function () {
    return searchService.searchQuery;
  };

  $scope.showCountryView = function () {
    $location.url('search/country/' + searchService.flightUrl())
  };

  $scope.showLeftMenu = function () {
    $mdSidenav('left').toggle();
  };

  function getMonths() {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
});
