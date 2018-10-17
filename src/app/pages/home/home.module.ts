import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DSODCarouselComponent } from './carousel.component';
import { DSODFeaturedTopicsComponent } from './featured-topics.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DSODLatestComponent } from './latest.component';
import { DSODLatestItemComponent } from './latest-item.component';
import { DSODHomeAdComponent } from './ad-banner.component';
import { DSODPodcastsComponent } from './podcasts.component';
import {TabsModule} from 'ngx-bootstrap/tabs'
import { DSODPodcastItemsComponent } from './podcast-items.component';
import { DSODPodcastsByComponent } from './podcasts-by.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TabsModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    DSODCarouselComponent,
    DSODFeaturedTopicsComponent,
    DSODLatestComponent,
    DSODLatestItemComponent,
    DSODHomeAdComponent,
    DSODPodcastsComponent,
    DSODPodcastItemsComponent,
    DSODPodcastsByComponent
  ]
})
export class HomeModule {}
