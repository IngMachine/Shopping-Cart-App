import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'carts',
        loadChildren: () => import('../carts/carts.module').then( m => m.CartsModule )
        // TODO: Guards
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
