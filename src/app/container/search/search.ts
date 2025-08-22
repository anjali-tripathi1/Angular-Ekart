import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, NgModule, Output, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
   searchText = ''
   @ViewChild('searchInput') searchInputEle:ElementRef

   @Output()
   searchTextChanged:EventEmitter<string> = new EventEmitter<string>()
   onsearchTextChanged(){
        this.searchTextChanged.emit(this.searchText)
   }

   updateSearchText(){
      //  this.searchText = event.target.value
      // console.log(inputEl)
      this.searchText = this.searchInputEle.nativeElement.value
      this.searchTextChanged.emit(this.searchText)
   }

    // searchText: string = 'Womens watch';

  // updateSearchText(event: any){
  //     this.searchText = event.target.value;
  // }
}
