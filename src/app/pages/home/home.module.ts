import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent} from './carousel.component'
import { DSOFeaturedTopicsComponent } from './featured-topics.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {DsodLatestComponent} from './latest.component'
import {DsodLatestItemComponent} from './latest-item.component'
import { DsodHomeAdComponent } from './ad-banner.component';
import { DsodPodcastsComponent } from './podcasts.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, CarouselComponent, DSOFeaturedTopicsComponent, DsodLatestComponent, DsodLatestItemComponent, DsodHomeAdComponent, DsodPodcastsComponent]
})
export class HomeModule { }
