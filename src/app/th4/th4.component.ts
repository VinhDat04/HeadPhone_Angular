import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-th4',
  templateUrl: './th4.component.html',
  styleUrls: ['./th4.component.css']
})
export class Th4Component {
  th4Products: Products[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getth4Products();
  }


  getth4Products(): void {
    this.productService.getProduclist()
      .subscribe(products => {
        this.th4Products = products.filter(product => product.trademark === 'Takstar');
      });
  }

}
