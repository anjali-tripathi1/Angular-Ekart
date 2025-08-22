import { Component, Input, OnInit } from '@angular/core';
import { Items } from '../../Models/Product';
import { ProductList } from '../product-list/product-list';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
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
