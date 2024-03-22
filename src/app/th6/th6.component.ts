import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-th6',
  templateUrl: './th6.component.html',
  styleUrls: ['./th6.component.css']
})
export class Th6Component {
  th6Products: Products[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getth6Products();
  }


  getth6Products(): void {
    this.productService.getProduclist()
      .subscribe(products => {
        this.th6Products = products.filter(product => product.trademark === 'JBL');
      });
  }
}
