import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './product-list/star/star.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
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
import { Th9Component } from './th9/th9.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    StarComponent,
    ProductDetailsComponent,
    ProductsComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    TypeCProductsComponent,
    TypeAProductsComponent,
    TypeBProductsComponent,
    TypeDProductsComponent,
    TypeEProductsComponent,
    Th1Component,
    Th2Component,
    Th3Component,
    Th4Component,
    Th5Component,
    Th6Component,
    Th7Component,
    Th8Component,
    Th9Component,
    UserComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
