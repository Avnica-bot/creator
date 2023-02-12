import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterPipe } from './pipe/filter.pipe';
import { SearchComponent } from './search.component';



@NgModule({
  declarations: [
    SearchComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
