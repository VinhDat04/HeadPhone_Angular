import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-th8',
  templateUrl: './th8.component.html',
  styleUrls: ['./th8.component.css']
})
export class Th8Component {
  th8Products: Products[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getth8Products();
  }


  getth8Products(): void {
    this.productService.getProduclist()
      .subscribe(products => {
        this.th8Products = products.filter(product => product.trademark === 'ISK');
      });
  }
}
