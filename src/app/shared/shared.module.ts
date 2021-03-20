import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NgZorroModule } from '../ngzorro/ngzorro.module';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';


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
    SharedRoutingModule,
    NgZorroModule
  ]
})
export class SharedModule { }
