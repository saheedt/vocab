import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { WordDetailsService } from './word-details.service'
import { ISearch } from '../search/search';

@Component({
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css']
})
export class WordDetailsComponent implements OnInit {
  title: string = 'Details'
  audioFile: string
  wordDetails: ISearch
  constructor(private wordDetailsService: WordDetailsService,
              private router: Router) { }

  ngOnInit() {
    this.wordDetails = this.wordDetailsService.wordDetails
    if (!this.wordDetails) {
      this.router.navigate([''])
      return;
    }
    this.audioFile = this.wordDetails.results[0].lexicalEntries[0].pronunciations[0].audioFile;
  }

  onBack() {
    this.router.navigate([''])
  }

}
