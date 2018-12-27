import { TestBed } from '@angular/core/testing';

import { WordDetailsService } from './word-details.service';
import { ISearch } from '../search/search';

describe('WordDetailsService', () => {
  let wordDetailsService: WordDetailsService
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [WordDetailsService]
  })
  wordDetailsService = TestBed.get(WordDetailsService);
});

  it('should be created', () => {
    const service: WordDetailsService = TestBed.get(WordDetailsService);
    expect(service).toBeTruthy();
  });
  it('should invoke getDetails method one time', () => {
    const fakeValue: ISearch = {
      metadata: {},
      results: []
    };
    const getDetails = spyOn(wordDetailsService, 'getDetails');
    wordDetailsService.getDetails(fakeValue)
    expect(getDetails).toHaveBeenCalledTimes(1)
  })
});
