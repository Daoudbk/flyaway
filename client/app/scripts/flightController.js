'use strict';
angular.module('app').controller('flightController', function ($scope, $location) {

  $scope.flights = getFlights();

  $scope.showCities = function (flight) {
    flight.cities = getCities();
    flight.open = !flight.open;
  };

  $scope.showCity = function (id) {
    $location.url('city/' + id);
  };

  function getFlights() {
    return [
      {
        id: '0',
        destination: 'Belgium',
        price: "23 €",
        dateRange: '4'
      },
      {
        id: '1',
        destination: 'Italy',
        price: "25 €",
        dateRange: '3'
      },
      {
        id: '2',
        destination: 'Portugal',
        price: "25 €",
        dateRange: '3'
      },
      {
        id: '3',
        destination: 'Greece',
        price: "37 €",
        dateRange: '4'
      },
      {
        id: '4',
        destination: 'Croatia',
        price: "43 €",
        dateRange: '5'
      },
      {
        id: '5',
        destination: 'Malta',
        price: "48 €",
        dateRange: '4'
      }
    ];
  }

  function getCities() {
    return [
      {
        id: '0',
        destination: 'Milan',
        price: "25 €",
        dateRange: '3'
      },
      {
        id: '1',
        destination: 'Rome',
        price: "48 €",
        dateRange: '4'
      }]
  }
});
