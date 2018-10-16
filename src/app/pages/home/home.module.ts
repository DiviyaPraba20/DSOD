import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent} from './carousel.component'
import { DSOFeaturedTopicsComponent } from './featured-topics.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, CarouselComponent, DSOFeaturedTopicsComponent]
})
export class HomeModule { }
