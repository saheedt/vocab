import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { cold } from 'jasmine-marbles';

import { SearchService } from './search.service';
import { ISearch } from './search';

describe('SearchService', () => {
  let searchService: SearchService;
  let http: any;
  const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        SearchService,
        { provide: HttpClient, useValue: httpSpy }
      ]
    });
    searchService = TestBed.get(SearchService);
    http = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });
  it('should invoke HttpClient get method', () => {
    const stubValue: ISearch = {
      metadata: {},
      results: []
    };
    const expected = cold('--metadata-results|', stubValue)
    http.get.and.returnValue(expected);
    searchService.searchWord('test')
    expect(httpSpy.get).toHaveBeenCalled()
  });
});
