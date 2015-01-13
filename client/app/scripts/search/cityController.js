'use strict';
angular.module('app').controller('cityController', function ($scope, $location, $window, searchService) {

  $scope.getCityFlights = function () {
    return searchService.cityFlights;
  };

  $scope.loadCityFlights = function () {
    searchService.loadCityFlights();
  };

  $scope.showBooking = function () {
    $location.url('search/booking/Barcelona/Milan/12012014/16012014');
  };

  $scope.navigateBack = function () {
    $window.history.back();
  };
});
