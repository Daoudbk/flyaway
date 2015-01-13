'use strict';
describe('countryController', function () {
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

  it('provides search query', function () {
    searchService.searchQuery = {from: 'Spain'};
    expect(scope.getSearchQuery()).toEqual({from: 'Spain'});
  });

  it('provides flights', function () {
    searchService.flights = [{from: 'Spain'}];
    expect(scope.getFlights()).toEqual([{from: 'Spain'}]);
  });

  it('load flights after view is shown', function () {
    scope.loadFlights();
    expect(searchService.loadFlights).toHaveBeenCalled();
  });

  it('shows cities', function () {
    var flight = {open: false};
    scope.showCities(flight);
    expect(flight.open).toBeTruthy();
  });

  it('changes location to city page', function () {
    searchService.flightUrl.and.returnValue('Spain/Ukraine/December/1');
    scope.showCity();
    expect(location.url).toHaveBeenCalledWith('search/city/Spain/Ukraine/December/1');
  });

  function mockSearchService() {
    searchService = jasmine.createSpyObj('searchService', ['flightUrl', 'loadFlights']);
  }

  function mockLocation() {
    location = jasmine.createSpyObj('location', ['url']);
  }

  function createController($controller) {
    $controller('countryController', {
      $scope: scope,
      searchService: searchService,
      $location: location
    });
  }
});
