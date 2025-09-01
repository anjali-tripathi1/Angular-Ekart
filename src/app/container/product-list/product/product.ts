import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Items } from '../../../Models/Product';
import { Highlight } from "../../../coustomDirectives/highlight.directive";
import { DisableProduct } from "../../../coustomDirectives/disableProduct.directive";


@Component({
  selector: 'app-product',
  imports: [CommonModule, Highlight, DisableProduct],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product{
  @Input()
  product:Items
    // id : number
    // name : string
    // description : string
    // brand : string
    // gender : string
    // category : string
    // size : number[]
    // color : string[]
    // price : number
    // discountPrice? : number
    // is_in_inventory : boolean
    // items_left : number
    // imageURL : string
    // slug : string



}
