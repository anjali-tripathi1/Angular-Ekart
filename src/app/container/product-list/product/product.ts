import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input()
  product:{
    id : number,
    name : string,
    description : string,
    brand : string,
    gender : string,
    category : string,
    size : number[],
    color : string[],
    price : number,
    discountPrice? : number,
    is_in_inventory : boolean,
    items_left : number,
    imageURL : string,
    slug : string
  }
}
