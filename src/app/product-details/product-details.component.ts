import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetail: Products | undefined
  constructor(private router: ActivatedRoute, private productService: ProductsService) {

  }

  ngOnInit(): void {
    let id = String(this.router.snapshot.params['id'])
    // this.productService.getProdcutId(id.toString()).subscribe(data => {
    this.productService.getProdcutId(id).subscribe(data => {
      this.productDetail = data;
    })
  }
}
