import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-type-e-products',
  templateUrl: './type-e-products.component.html',
  styleUrls: ['./type-e-products.component.css']
})
export class TypeEProductsComponent {
  typeEProducts: Products[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getTypeEProducts();
  }

  getTypeEProducts(): void {
    this.productService.getProduclist()
      .subscribe(products => {
        this.typeEProducts = products.filter(product => product.type === 'E');
      });
  }
}
