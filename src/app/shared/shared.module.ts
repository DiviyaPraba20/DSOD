import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSODRatingComponent } from './rating.component';
import { DSODTopicComponent } from './topic.component';
import { DSODTrendingComponent } from './trending.component';
import { DSODSponsoredAdComponent } from './sponsored-ad.component';
import { DSODMediaContentComponent } from './media-placeholder.component';
import { DSODContnetComponent } from './content-placeholder.component';
import { DSODFilterSelectComponent } from './select/filter-select.component';
import { DSODContentActionComponent } from './content-action/content-action.component';
import { DSODPodcastItemsComponent } from './podcast-items/podcast-items.component';
import { DSODAudioPlayerComponent } from './audio-player/audio-player.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    DSODRatingComponent,
    DSODTopicComponent,
    DSODTrendingComponent,
    DSODSponsoredAdComponent,
    DSODMediaContentComponent,
    DSODContnetComponent,
    DSODFilterSelectComponent,
    DSODContentActionComponent,
    DSODPodcastItemsComponent,
    DSODAudioPlayerComponent
  ],
  exports: [
    DSODRatingComponent,
    DSODTopicComponent,
    DSODTrendingComponent,
    DSODSponsoredAdComponent,
    DSODMediaContentComponent,
    DSODContnetComponent,
    DSODFilterSelectComponent,
    DSODContentActionComponent,
    DSODPodcastItemsComponent,
    DSODAudioPlayerComponent
  ]
})
export class SharedModule {}
