'use strict';
angular.module('app', [
  'ngRoute',
  'ngMaterial',
  'restangular',
  'mobile-angular-ui',
  '_'
]).config(function ($routeProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: 'views/search/search.html',
      controller: 'searchController'
    })
    .when('/search/country/:from/:to/:month/:range', {
      templateUrl: 'views/search/country.html',
      controller: 'countryController'
    })
    .when('/search/city/:from/:to/:month/:range', {
      templateUrl: 'views/search/city.html',
      controller: 'cityController'
    })
    .when('/search/booking/:from/:to/:fromdate/:backdate', {
      templateUrl: 'views/booking/booking.html',
      controller: 'bookingController'
    })
    .otherwise({
      redirectTo: '/search'
    });
}).config(function (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/');
});

