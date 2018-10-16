import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent} from './carousel.component'
import { DSOFeaturedTopicsComponent } from './featured-topics.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, CarouselComponent, DSOFeaturedTopicsComponent]
})
export class HomeModule { }
