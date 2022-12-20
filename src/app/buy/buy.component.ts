import { Component } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent {
  products: any;

  constructor(public productService: ProductServiceService){

  }
  ngOnInit(): void {
  
  }



}
