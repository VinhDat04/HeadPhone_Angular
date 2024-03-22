import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-th5',
  templateUrl: './th5.component.html',
  styleUrls: ['./th5.component.css']
})
export class Th5Component {
  th5Products: Products[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getth5Products();
  }


  getth5Products(): void {
    this.productService.getProduclist()
      .subscribe(products => {
        this.th5Products = products.filter(product => product.trademark === 'TRN');
      });
  }
}
