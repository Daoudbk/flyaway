'use strict';
angular.module('app').controller('flightDetailController', function ($scope, $window) {
  $scope.navigateBack = function () {
    $window.history.back();
  };
});
