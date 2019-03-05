import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { CMSModule } from '../../cms/cms.module';
import { SharedModule } from '../../shared/shared.module';
import { SPONSONR_CONTAINERS } from './container';
import { SPONSOR_COMPONENTS } from './components';

@NgModule({
  imports: [
    CommonModule,
    SponsorsRoutingModule,
    TabsModule.forRoot(),
    SharedModule,
    CMSModule,
    NgxSpinnerModule,
    InfiniteScrollModule
  ],
  declarations: [
    ...SPONSONR_CONTAINERS,
    ...SPONSOR_COMPONENTS
  ]
})
export class SponsorsModule {}
