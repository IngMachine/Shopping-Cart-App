import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAllComponent } from './pages/products-all/products-all.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductsAllComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
