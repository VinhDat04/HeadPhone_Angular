import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-type-b-products',
  templateUrl: './type-b-products.component.html',
  styleUrls: ['./type-b-products.component.css']
})
export class TypeBProductsComponent {
  typeBProducts: Products[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getTypeBProducts();
  }

  getTypeBProducts(): void {
    this.productService.getProduclist()
      .subscribe(products => {
        this.typeBProducts = products.filter(product => product.type === 'B');
      });
  }
}
