import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-type-c-products',
  templateUrl: './type-c-products.component.html',
  styleUrls: ['./type-c-products.component.css']
})
export class TypeCProductsComponent {
  typeCProducts: Products[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getTypeCProducts();
  }

  getTypeCProducts(): void {
    this.productService.getProduclist()
      .subscribe(products => {
        this.typeCProducts = products.filter(product => product.type === 'C');
      });
  }
}
