import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartsComponent } from './pages/carts/carts.component';
import { CurrentCartComponent } from './pages/current-cart/current-cart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CurrentCartComponent
      },
      {
        path: 'all',
        component: CartsComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartsRoutingModule { }
