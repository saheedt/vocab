import { Injectable } from '@angular/core';

import { ISearch } from '../search/search';

@Injectable({
  providedIn: 'root'
})
export class WordDetailsService {
  wordDetails: ISearch
  constructor() { }

  getDetails(details: ISearch): void {
    this.wordDetails = details
  }
}
