import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-th1',
  templateUrl: './th1.component.html',
  styleUrls: ['./th1.component.css']
})
export class Th1Component {
  th1Products: Products[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getth1Products();
  }

  getth1Products(): void {
    this.productService.getProduclist()
      .subscribe(products => {
        this.th1Products = products.filter(product => product.trademark === 'AKG');
      });
  }
}
