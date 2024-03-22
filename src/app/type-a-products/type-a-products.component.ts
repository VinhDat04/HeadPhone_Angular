import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-type-a-products',
  templateUrl: './type-a-products.component.html',
  styleUrls: ['./type-a-products.component.css']
})
export class TypeAProductsComponent {
  typeAProducts: Products[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getTypeAProducts();
  }

  getTypeAProducts(): void {
    this.productService.getProduclist()
      .subscribe(products => {
        this.typeAProducts = products.filter(product => product.type === 'A');
      });
  }
}
