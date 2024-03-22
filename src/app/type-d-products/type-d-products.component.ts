import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-type-d-products',
  templateUrl: './type-d-products.component.html',
  styleUrls: ['./type-d-products.component.css']
})
export class TypeDProductsComponent {
  typeDProducts: Products[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getTypeDProducts();
  }

  getTypeDProducts(): void {
    this.productService.getProduclist()
      .subscribe(products => {
        this.typeDProducts = products.filter(product => product.type === 'D');
      });
  }
}
