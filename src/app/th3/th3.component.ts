import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-th3',
  templateUrl: './th3.component.html',
  styleUrls: ['./th3.component.css']
})
export class Th3Component {
  th3Products: Products[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getth3Products();
  }

  getth3Products(): void {
    this.productService.getProduclist()
      .subscribe(products => {
        this.th3Products = products.filter(product => product.trademark === 'CCA');
      });
  }
}
