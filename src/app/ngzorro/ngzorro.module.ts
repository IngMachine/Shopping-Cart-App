import { NgModule } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpaceModule } from 'ng-zorro-antd/space';


@NgModule({
  exports: [
    NzBreadCrumbModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    NzSpaceModule
  ]
})
export class NgzorroModule { }
