import { Component, ViewChild } from '@angular/core';
import { Search } from "./search/search";
import { CommonModule } from '@angular/common';
import { ProductList } from "./product-list/product-list";
import { ProductDetail } from "./product-detail/product-detail";

@Component({
  selector: 'app-container',
  imports: [Search, CommonModule, ProductList, ProductDetail],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
    listItem:string[] = ["Anjali", "Saroj", "Steve", "Sam", "Martha"]

    searchText:string = ''

    @ViewChild(ProductList) productList:ProductList

    setSearchText(value:string){
        this.searchText = value
    }
}
