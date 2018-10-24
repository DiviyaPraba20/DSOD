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
import { DSODAudioPlayerComponent } from './audio-player/audio-player.component';
import { DSODBookmarkComponent } from './content-action/bookmark.component';
import { DSODDownloadComponent } from './content-action/download.component';
import { DSODShareComponent } from './content-action/share.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [
    DSODRatingComponent,
    DSODTopicComponent,
    DSODTrendingComponent,
    DSODSponsoredAdComponent,
    DSODMediaContentComponent,
    DSODContnetComponent,
    DSODFilterSelectComponent,
    DSODContentActionComponent,
    DSODAudioPlayerComponent,
    DSODBookmarkComponent,
    DSODShareComponent,
    DSODDownloadComponent
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
    DSODAudioPlayerComponent,
    DSODBookmarkComponent,
    DSODShareComponent,
    DSODDownloadComponent
  ]
})
export class SharedModule {}
