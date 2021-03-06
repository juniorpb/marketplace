import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shered/header/header.component';
import { IndexComponent } from './home/index/index.component';

import { HttpClientModule } from '@angular/common/http';
import { VendorComponent } from './Shered/vendor/vendor.component';
import { ListProductsComponent } from './Shered/list-products/list-products.component';
import { ProductsByIdComponent } from './Shered/products-by-id/products-by-id.component';
import { LoginComponent } from './Shered/login/login.component';
import { DashComponent } from './admin/dash/dash.component';
import { AdminVendorsComponent } from './admin/dash/admin-vendors/admin-vendors.component';
import { AdminProductsComponent } from './admin/dash/admin-products/admin-products.component'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminStoresComponent } from './admin/admin-stores/admin-stores.component';
import { ProductCreateComponent } from './admin/dash/product-create/product-create.component';

import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    VendorComponent,
    ListProductsComponent,
    ProductsByIdComponent,
    LoginComponent,
    DashComponent,
    AdminVendorsComponent,
    AdminProductsComponent,
    AdminStoresComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    ImageCropperModule,
  
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
