import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsAllComponent } from './pages/products-all/products-all.component';
import { ProductComponent } from './components/product/product.component';
import { NgZorroModule } from '../ngZorro/ngzorro.module';


@NgModule({
  declarations: [ProductsAllComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgZorroModule
  ]
})
export class ProductsModule { }
