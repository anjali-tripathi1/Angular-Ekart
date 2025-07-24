import { Component } from '@angular/core';
import { Search } from "./search/search";
import { CommonModule } from '@angular/common';
import { ProductList } from "./product-list/product-list";

@Component({
  selector: 'app-container',
  imports: [Search, CommonModule, ProductList],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
    listItem:string[] = ["Anjali", "Saroj", "Steve", "Sam", "Martha"]
}
