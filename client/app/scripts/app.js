'use strict';
angular.module('app', [
  'ngRoute',
  'ngMaterial',
  '_'
]).config(function ($routeProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: '../views/search.html'
    })
    .when('/flight', {
      templateUrl: '../views/flight.html'
    })
    .when('/city/:id', {
      templateUrl: '../views/month.html'
    })
    .when('/flight/:id', {
      templateUrl: '../views/flight-detail.html'
    })
    .otherwise({
      redirectTo: '/search'
    });
});
