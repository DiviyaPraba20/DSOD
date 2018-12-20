import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { CMSModule } from '../../cms/cms.module';
import { SharedModule } from '../../shared/shared.module';
import { SponsorPostsComponent } from './components/sponsor-posts/sponsor-posts.component';
import { SponsorContentComponent } from './components/sponsor-content/sponsor-content.component';
import { SponsorsContainerComponent } from './container/sponsors-container.component';

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
    SponsorPostsComponent,
    SponsorContentComponent
  ]
})
export class SponsorsModule { }
