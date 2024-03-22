import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TypeCProductsComponent } from './type-c-products/type-c-products.component';
import { TypeAProductsComponent } from './type-a-products/type-a-products.component';
import { TypeBProductsComponent } from './type-b-products/type-b-products.component';
import { TypeDProductsComponent } from './type-d-products/type-d-products.component';
import { TypeEProductsComponent } from './type-e-products/type-e-products.component';
import { Th1Component } from './th1/th1.component';
import { Th2Component } from './th2/th2.component';
import { Th3Component } from './th3/th3.component';
import { Th4Component } from './th4/th4.component';
import { Th5Component } from './th5/th5.component';
import { Th6Component } from './th6/th6.component';
import { Th7Component } from './th7/th7.component';
import { Th8Component } from './th8/th8.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Audi Store' },
  { path: 'product-details/:id', component: ProductDetailsComponent, title: 'Product Details' },
  { path: 'list', component: ProductListComponent, title: 'Product List' },
  { path: 'cart/:id', component: CartComponent, title: 'Product Cart' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'typeCproducts', component: TypeCProductsComponent, title: 'Tai Nghe Thể Thao' },
  { path: 'typeAproducts', component: TypeAProductsComponent, title: 'Tai Nghe Kiểm Âm' },
  { path: 'typeBproducts', component: TypeBProductsComponent, title: 'Tai Nghe DJ, Producer' },
  { path: 'typeDproducts', component: TypeDProductsComponent, title: 'Tai Nghe Gaming' },
  { path: 'typeEproducts', component: TypeEProductsComponent, title: 'Tai Nghe Bluetooth' },
  { path: 'th1Products', component: Th1Component, title: 'Tai Nghe AKG' },
  { path: 'th2Products', component: Th2Component, title: 'Tai Nghe KZ' },
  { path: 'th3Products', component: Th3Component, title: 'Tai Nghe CCA' },
  { path: 'th4Products', component: Th4Component, title: 'Tai Nghe Takstar' },
  { path: 'th5Products', component: Th5Component, title: 'Tai Nghe TRN' },
  { path: 'th6Products', component: Th6Component, title: 'Tai Nghe JBL' },
  { path: 'th7Products', component: Th7Component, title: 'Tai Nghe Apple' },
  { path: 'th8Products', component: Th8Component, title: 'Tai Nghe ISK' },
  { path: 'products-list', component: ProductListComponent, title: 'Danh Sách Sản Phẩm' },
  { path: 'menu', component: MenuComponent, title: 'Menu' },









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
