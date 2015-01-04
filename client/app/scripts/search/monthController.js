'use strict';
angular.module('app').controller('monthController', function ($scope, $location, $window) {

  $scope.monthFlights = getMonthFlights();

  $scope.showFlight = function () {
    $location.url('booking/Barcelona/Milan/12012014/16012014');
  };

  $scope.navigateBack = function () {
    $window.history.back();
  };

  function getMonthFlights() {
    return [
      {
        id: '0',
        date: '1',
        day: 'Mo',
        price: "23",
        dateRange: '4'
      },
      {
        id: '1',
        date: '2',
        day: 'Tu',
        price: "83",
        dateRange: '4'
      }, {
        id: '2',
        date: '3',
        day: 'We',
        price: "28",
        dateRange: '4'
      }, {
        id: '3',
        date: '4',
        day: 'Th',
        price: "32",
        dateRange: '4'
      }, {
        id: '4',
        date: '5',
        day: 'Fr',
        price: "201",
        dateRange: '4'
      }, {
        id: '5',
        date: '6',
        day: 'Sa',
        price: "28",
        dateRange: '4'
      }, {
        id: '7',
        date: '8',
        day: 'Su',
        price: "30",
        dateRange: '4'
      }, {
        id: '8',
        date: '9',
        day: 'Mo',
        price: "49",
        dateRange: '4'
      }, {
        id: '9',
        date: '10',
        day: 'Tu',
        price: "25",
        dateRange: '4'
      }, {
        id: '10',
        date: '11',
        day: 'We',
        price: "91",
        dateRange: '4'
      }, {
        id: '11',
        date: '12',
        day: 'Th',
        price: "32",
        dateRange: '4'
      }, {
        id: '12',
        date: '13',
        day: 'Fr',
        price: "201",
        dateRange: '4'
      }, {
        id: '13',
        date: '14',
        day: 'Sa',
        price: "28",
        dateRange: '4'
      }, {
        id: '14',
        date: '15',
        day: 'Su',
        price: "30",
        dateRange: '4'
      }, {
        id: '15',
        date: '16',
        day: 'Mo',
        price: "49",
        dateRange: '4'
      }, {
        id: '16',
        date: '17',
        day: 'Tu',
        price: "25",
        dateRange: '4'
      }, {
        id: '17',
        date: '18',
        day: 'We',
        price: "91",
        dateRange: '4'
      }, {
        id: '18',
        date: '19',
        day: 'Tu',
        price: "83",
        dateRange: '4'
      }, {
        id: '19',
        date: '20',
        day: 'We',
        price: "28",
        dateRange: '4'
      }, {
        id: '20',
        date: '21',
        day: 'Th',
        price: "32",
        dateRange: '4'
      }, {
        id: '21',
        date: '22',
        day: 'Fr',
        price: "201",
        dateRange: '4'
      }, {
        id: '22',
        date: '23',
        day: 'Sa',
        price: "28",
        dateRange: '4'
      }, {
        id: '23',
        date: '24',
        day: 'Su',
        price: "30",
        dateRange: '4'
      }, {
        id: '24',
        date: '25',
        day: 'Mo',
        price: "49",
        dateRange: '4'
      }, {
        id: '25',
        date: '26',
        day: 'Tu',
        price: "25",
        dateRange: '4'
      }, {
        id: '26',
        date: '27',
        day: 'We',
        price: "91",
        dateRange: '4'
      }, {
        id: '27',
        date: '28',
        day: 'Th',
        price: "32",
        dateRange: '4'
      }, {
        id: '28',
        date: '29',
        day: 'Fr',
        price: "201",
        dateRange: '4'
      }, {
        id: '29',
        date: '30',
        day: 'Sa',
        price: "28",
        dateRange: '4'
      }, {
        id: '30',
        date: '31',
        day: 'Su',
        price: "30",
        dateRange: '4'
      }
    ];
  }
});
