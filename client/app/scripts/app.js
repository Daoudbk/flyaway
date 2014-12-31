'use strict';
angular.module('app', [
  'ngRoute',
  'ngMaterial',
  '_'
]).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/search.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
