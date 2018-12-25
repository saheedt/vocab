import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { SearchComponent } from './search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule
  ]
})
export class SearchModule { }
