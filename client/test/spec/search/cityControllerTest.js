'use strict';
describe('cityController', function () {
  var scope;
  var searchService;
  var location;

  beforeEach(module('app'));
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    mockSearchService();
    mockLocation();
    createController($controller);
  }));

  it('provides city flights', function () {
    searchService.cityFlights = [{from: 'Milan'}];
    expect(scope.getCityFlights()).toEqual([{from: 'Milan'}]);
  });

  it('load city flights after view is shown', function () {
    scope.loadCityFlights();
    expect(searchService.loadCityFlights).toHaveBeenCalled();
  });

  it('changes location to booking page', function () {
    scope.showBooking();
    expect(location.url).toHaveBeenCalledWith('booking/Barcelona/Milan/12012014/16012014');
  });

  function mockSearchService() {
    searchService = jasmine.createSpyObj('searchService', ['loadCityFlights']);
  }

  function mockLocation() {
    location = jasmine.createSpyObj('location', ['url']);
  }

  function createController($controller) {
    $controller('cityController', {
      $scope: scope,
      searchService: searchService,
      $location: location
    });
  }
});
