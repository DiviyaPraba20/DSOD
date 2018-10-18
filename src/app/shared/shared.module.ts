import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSODRatingComponent } from './rating.component';
import { DSODTopicComponent } from './topic.component';
import { DSODTrendingComponent } from './trending.component';
import { DSODSponsoredAdComponent } from './sponsored-ad.component';
import { DSODContentComponent } from './content-placeholder.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DSODRatingComponent,
    DSODTopicComponent,
    DSODTrendingComponent,
    DSODSponsoredAdComponent,
    DSODContentComponent
  ],
  exports: [
    DSODRatingComponent,
    DSODTopicComponent,
    DSODTrendingComponent,
    DSODSponsoredAdComponent,
    DSODContentComponent
  ]
})
export class SharedModule {}
