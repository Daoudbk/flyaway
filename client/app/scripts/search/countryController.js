'use strict';
angular.module('app').controller('countryController', function ($scope, $location, $window, Restangular, searchService) {

  $scope.getSearchQuery = function () {
    return searchService.searchQuery;
  };

  $scope.getFlights = function () {
    return searchService.flights;
  };

  $scope.showCities = function (flight) {
    flight.open = !flight.open;
  };

  $scope.showCity = function () {
    $location.url('search/city/' + searchService.flightUrl());
  };

  $scope.navigateBack = function () {
    $window.history.back();
  };

  $scope.loadFlights = function () {
    searchService.loadFlights();
  };
});
