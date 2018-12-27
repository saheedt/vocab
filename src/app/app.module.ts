import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { WordDetailsModule } from './wordDetails/word-details.module';
import { SearchModule } from './search/search.module'; 
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: SearchComponent }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WordDetailsModule,
    SearchModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(faSearch)
  }
}
