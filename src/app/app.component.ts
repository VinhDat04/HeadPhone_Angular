import { Component } from '@angular/core';
import { Products } from './products';
import { AuthService } from './auth/auth.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService, private productService: ProductsService) { }
  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    this.authService.isAdmin = false;
    this.authService.logout();
  }
  isAdmin(): boolean { // Chỉnh sửa kiểu trả về của phương thức
    return this.authService.isAdmin; // Trả về giá trị boolean từ AuthService
  }

  products: Products[] = [];
  filterProductList: Products[] = [];
  searching: string = '';

  ngOnInit() {
    this.productService.getProduclist().subscribe(products => {
      this.products = products;
      this.filterProductList = this.products;
    });
  }

  filterResults() {
    if (!this.searching) {
      this.filterProductList = this.products;
    } else {
      this.filterProductList = this.products.filter(
        list => list.productName?.toLowerCase().includes(this.searching.toLowerCase())
      );
    }
  }
}
