import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'vocab-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css']
})
export class WordDetailsComponent implements OnInit {
  title: string = 'Details'
  constructor() { }

  ngOnInit() {
  }

}
