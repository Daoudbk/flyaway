'use strict';
describe('searchController', function () {
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

  it('shows country view', function () {
    searchService.flightUrl.and.returnValue('Spain/Ukraine/December/1');
    scope.showCountryView();
    expect(location.url).toHaveBeenCalledWith('search/country/Spain/Ukraine/December/1');
  });

  function mockSearchService() {
    searchService = jasmine.createSpyObj('searchService', ['flightUrl']);
  }

  function mockLocation() {
    location = jasmine.createSpyObj('location', ['url']);
  }

  function createController($controller) {
    $controller('searchController', {
      $scope: scope,
      searchService: searchService,
      $location: location
    });
  }
});
