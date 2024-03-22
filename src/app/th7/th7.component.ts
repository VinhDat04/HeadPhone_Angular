import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-th7',
  templateUrl: './th7.component.html',
  styleUrls: ['./th7.component.css']
})
export class Th7Component {
  th7Products: Products[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getth7Products();
  }


  getth7Products(): void {
    this.productService.getProduclist()
      .subscribe(products => {
        this.th7Products = products.filter(product => product.trademark === 'Apple');
      });
  }
}
