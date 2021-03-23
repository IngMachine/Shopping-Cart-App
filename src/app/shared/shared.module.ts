import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NgZorroModule } from '../ngZorro/ngzorro.module';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SiderComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SiderComponent,
  ],
  imports: [
    CommonModule,
    NgZorroModule,
    RouterModule
  ]
})
export class SharedModule { }
