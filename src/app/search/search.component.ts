import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router) {

  }
  onSearchClicked(): void {
    this.searchService.searchWord(this.word).subscribe(
      details => {
        this.wordDetailsService.getDetails(details);
        this.router.navigate(['/details'])
      },
      error => {
        console.log(`Error in Search comp: ${error}`)
      }
    )
  }
}
