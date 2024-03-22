import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  protected products: Products[] = []
  private URL = `http://localhost:3000/products`
  getProduclist(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.URL}`)
  }
  // getProdcutId(id: string) {
  //   let productId: string;
  //   if (!id || id.trim().length === 0) {
  //     // If the ID is not provided or empty, generate a random alphanumeric string
  //     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //     const charactersLength = characters.length;
  //     productId = '';
  //     for (let i = 0; i < 4; i++) {
  //       productId += characters.charAt(Math.floor(Math.random() * charactersLength));
  //     }
  //   } else {
  //     // If the ID is provided, use it as is
  //     productId = id;
  //   }
  //   return this.http.get<Products>(`${this.URL}/${productId}`);
  // }

  // getProdcutId(id: string) {
  //   let productId: string | number;
  //   if (!id || id.trim().length === 0) {
  //     // If the ID is not provided or empty, generate a random alphanumeric string
  //     const characters = '0123456789';
  //     const charactersLength = characters.length;
  //     productId = '';
  //     for (let i = 0; i < 4; i++) {
  //       productId += characters.charAt(Math.floor(Math.random() * charactersLength));
  //     }
  //   } else {
  //     // If the ID is provided, use it as is
  //     productId = parseInt(id); // or productId = Number(id);
  //   }
  //   return this.http.get<Products>(`${this.URL}/${productId}`);
  // }
  getProdcutId(id: string) {
    return this.http.get<Products>(`${this.URL}/${id}`);
  }



  AddProduct(frmProduct: any): Observable<Products[]> {
    return this.http.post<Products[]>(`${this.URL}`, frmProduct)
  }
  // AutoId() {
  //   var max = 100
  //   this.products.forEach(item => {
  //     if (item.id > max)
  //       max = item.id
  //   })
  //   return max = max + 1;
  // }
  // AutoId() {
  //   var max = 200
  //   this.products.forEach(item => {
  //     if (item.id > max)
  //       max = item.id
  //   })
  //   return max + 1
  // }
  EditProduct(id: number) {
    return this.products[id]
  }
  UpdateProduct(id: number, frmProduct: any): Observable<Products[]> {
    return this.http.put<Products[]>(`${this.URL}/${id}`, frmProduct)

  }
  DeleteProduct(id: number): Observable<Products[]> {
    return this.http.delete<Products[]>(`${this.URL}/${id}`)
  }

}
