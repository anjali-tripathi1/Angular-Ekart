import { Component, Input, OnInit } from '@angular/core';
import { Items } from '../../Models/Product';
import { ProductList } from '../product-list/product-list';
import { CommonModule } from '@angular/common';
import { SetBackground } from '../../coustomDirectives/setBackground.directive';
import { HoverDirective } from "../../coustomDirectives/hover.directive";

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, SetBackground, HoverDirective],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit{

   @Input() productList:ProductList = undefined

   product:Items

   ngOnInit(){
      this.product = this.productList.selectedProduct
   }
}
