import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { SearchService } from './search.service';
import { WordDetailsService } from '../wordDetails/word-details.service'

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title = 'vocab';
  word: string;
  searchError: string = null;

  constructor(private searchService: SearchService,
    private wordDetailsService: WordDetailsService,
    private router: Router,
    private spinner: Ng4LoadingSpinnerService) {

  }
  onSearchClicked(): void {
    this.searchError = null
    if (this.isEmptyOrNull(this.word)) {
      this.searchError = 'Can\'t go to town for an empty input'
      return
    }
    this.spinner.show()
    this.word = this.word.trim();
    this.searchService.searchWord(this.word).subscribe(
      details => {
        if (details.type &&  details.type == 'invalid-json') {
          this.spinner.hide()
          this.searchError = 'Oops!!..word not found'
          return;
        }
        this.searchError = null;
        this.wordDetailsService.getDetails(details);
        this.spinner.hide()
        this.router.navigate(['/details'])
      },
      error => {
        this.spinner.hide()
        console.log(`Error in Search comp: ${error}`)
      }
    )
  }
  isEmptyOrNull(str: string): Boolean {
    return (!str || /^\s*$/.test(str));
  }
}
