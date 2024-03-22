import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-th2',
  templateUrl: './th2.component.html',
  styleUrls: ['./th2.component.css']
})
export class Th2Component {
  th2Products: Products[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getth2Products();
  }

  getth2Products(): void {
    this.productService.getProduclist()
      .subscribe(products => {
        this.th2Products = products.filter(product => product.trademark === 'KZ');
      });
  }
}
