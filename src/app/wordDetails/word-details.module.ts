import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WordDetailsComponent } from './word-details.component';

const routes: Routes = [
  { path: 'details', component: WordDetailsComponent }
];
@NgModule({
  declarations: [
    WordDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WordDetailsModule {}
