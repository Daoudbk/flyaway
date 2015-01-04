'use strict';
angular.module('app', [
  'ngRoute',
  'ngMaterial',
  'mobile-angular-ui',
  '_'
]).config(function ($routeProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: 'views/search/search.html',
      controller: "searchController"
    })
    .when('/search/flight/:from/:to/:month/:range', {
      templateUrl: 'views/search/flight.html',
      controller: "flightController"
    })
    .when('/search/month/:from/:to/:month/:range', {
      templateUrl: 'views/search/month.html',
      controller: "monthController"
    })
    .when('/booking/:from/:to/:fromdate/:backdate', {
      templateUrl: 'views/booking/booking.html',
      controller: "bookingController"
    })
    .otherwise({
      redirectTo: '/search'
    });
});
