'use strict';
angular.module('app').controller('bookingController', function ($scope, $window) {
  $scope.navigateBack = function () {
    $window.history.back();
  };
});
