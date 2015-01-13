'use strict';
angular.module('app').service('searchService', function (Restangular) {
  var self = this;
  self.searchQuery = defaultSearchQuery();
  self.flights = [];
  self.cityFlights = [];

  self.loadFlights = function () {
    Restangular.all('country').getList(self.searchQuery).then(function (flights) {
      self.flights = flights;
    });
  };

  self.loadCityFlights = function () {
    Restangular.all('city').getList(self.searchQuery).then(function (flights) {
      self.cityFlights = flights;
    });
  };

  self.flightUrl = function () {
    return self.searchQuery.from + '/' + self.searchQuery.to + '/' + self.searchQuery.month + '/' + self.searchQuery.range;
  };

  function defaultSearchQuery() {
    return {
      from: 'Spain',
      to: 'Ukraine',
      month: 'January',
      range: '0'
    };
  }
});
