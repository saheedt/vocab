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
  word: String

  constructor(private searchService: SearchService,
    private wordDetailsService: WordDetailsService,
    private router: Router,
    private spinner: Ng4LoadingSpinnerService) {

  }
  onSearchClicked(): void {
    this.spinner.show()
    this.searchService.searchWord(this.word).subscribe(
      details => {
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
}
