'use strict';
describe('searchService', function () {
  var searchService;

  beforeEach(module('app'));
  beforeEach(inject(function (_searchService_) {
    searchService = _searchService_;
  }));

  it('initialized', function () {
    expect(searchService.searchQuery).toEqual(getDefaultSearchQuery());
    expect(searchService.flights).toEqual([]);
    expect(searchService.cityFlights).toEqual([]);
  });

  it('converts flight to url', function () {
    expect(searchService.flightUrl()).toBe('Spain/Ukraine/January/0');
  });

  function getDefaultSearchQuery() {
    return {
      from: 'Spain',
      to: 'Ukraine',
      month: 'January',
      range: '0'
    };
  }
});
