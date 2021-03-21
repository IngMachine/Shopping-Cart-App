import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
/*
  {
    path: 'home',
    component: HomeComponent
  }, */
  {
    path: '',
    children: [
      // Modulos de producto.
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'carts',
            loadChildren: () => import('../carts/carts.module').then( m => m.CartsModule ),
            canLoad: [ AuthGuard ]
          },
          {
            path: 'products',
            loadChildren: () => import('../products/products.module').then( m => m.ProductsModule )
          },
          {
            path: '**',
            redirectTo: 'products'
          }
        ]
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
export class HomeRoutingModule { }
