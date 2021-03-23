import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonFoundComponent } from './home/pages/non-found/non-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: '',
    redirectTo: '/home/products',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NonFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
