import { Component } from '@angular/core';
import { Products } from '../products';
import { Cart } from '../cart';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productDetail: Products | undefined
  cartList: Cart[] = []
  InStock: number = 0
  constructor(private router: ActivatedRoute,
    private productServiece: ProductsService,
    private cartService: CartService) { this.cartList = cartService.getCartAll() }

  ngOnInit(): void {
    let id = String(this.router.snapshot.params['id'])
    // this.productServiece.getProdcutId(id.toString()).subscribe(data => {
    this.productServiece.getProdcutId(id).subscribe(data => {
      this.productDetail = data;
    })
    this.InStock = this.productDetail?.price! - 1
  }

  Add() {
    this.cartService.addCart(this.productDetail?.id!, this.productDetail)
    this.InStock = this.cartService.getInStock(this.productDetail?.id!)!
  } ItemCount() {
    return this.cartService.totalItems()
  } ItemSum() {
    return this.cartService.Total()
  }

  Remove(index: number) {
    this.cartService.RemoveCart(index)
  }

  DeleteAll() {
    this.cartService.DeleteAllCart()
  }
}
