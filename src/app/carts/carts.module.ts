import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas (Lazy loading)
import { CartsRoutingModule } from './carts-routing.module';

// Módulo de los componetes de NgZorro
import { NgZorroModule } from '../ngZorro/ngzorro.module';

// Components
import { CurrentCartComponent } from './pages/current-cart/current-cart.component';
import { CartsComponent } from './pages/carts/carts.component';
import { CartComponent } from './component/cart/cart.component';


@NgModule({
  declarations: [
    CurrentCartComponent,
    CartsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    CartsRoutingModule,
    NgZorroModule
  ]
})
export class CartsModule { }
