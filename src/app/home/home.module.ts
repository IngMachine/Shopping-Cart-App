import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NgZorroModule } from '../ngzorro/ngzorro.module';
import { SharedModule } from '../shared/shared.module';
import { NonFoundComponent } from './pages/non-found/non-found.component';


@NgModule({
  declarations: [HomeComponent, NonFoundComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroModule,
    SharedModule
  ]
})
export class HomeModule { }
