import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsContainerComponent } from './components/sponsors-container/sponsors-container.component';
import { CMSModule } from '../../cms/cms.module';
import { SharedModule } from '../../shared/shared.module';
import { SponsorPostsComponent } from './components/sponsor-posts/sponsor-posts.component';

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
    SponsorsContainerComponent,
    SponsorPostsComponent
  ]
})
export class SponsorsModule { }
