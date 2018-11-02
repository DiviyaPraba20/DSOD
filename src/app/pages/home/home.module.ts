import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HOME_COMPONENTS, HOME_CONTAINERS } from './index';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CMSModule } from 'src/app/cms/cms.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TabsModule.forRoot(),
    CMSModule,
    NgxSpinnerModule
  ],
  declarations: [...HOME_CONTAINERS, ...HOME_COMPONENTS]
})
export class HomeModule {}
