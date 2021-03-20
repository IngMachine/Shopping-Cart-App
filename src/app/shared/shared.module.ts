import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NgzorroModule } from '../ngzorro/ngzorro.module';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';
import { ContentTemporalComponent } from './content-temporal/content-temporal.component';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, SiderComponent, ContentTemporalComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    SiderComponent,
    ContentTemporalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgzorroModule
  ]
})
export class SharedModule { }
