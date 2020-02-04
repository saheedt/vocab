import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { cold } from 'jasmine-marbles';

import { SearchService } from './search.service';
import { ISearch } from './search';

describe('SearchService', () => {
  let searchService: SearchService;
  let http: any;
  const httpSpy = jasmine.createSpyObj('HttpClient', ['post']);
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

  it('should invoke HttpClient post method', () => {
    const stubValue: ISearch = {
      metadata: {},
      results: []
    };
    const expected = cold('--metadata-results|', stubValue)
    http.post.and.returnValue(expected);
    searchService.searchWord('test')
    expect(httpSpy.post).toHaveBeenCalled()
  });
});
