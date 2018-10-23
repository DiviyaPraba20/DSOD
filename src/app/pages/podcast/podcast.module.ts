import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PODCAST_CONTAINERS } from './containers';
import { PODCAST_COMPONENTS } from './components';
import { PodcastRoutingModule } from './podcast-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PodcastRoutingModule,
    TabsModule.forRoot()
  ],
  declarations: [...PODCAST_CONTAINERS, PODCAST_COMPONENTS]
})
export class PodcastModule {}
