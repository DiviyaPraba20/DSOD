import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSODRatingComponent } from './rating.component';
import { DSODTopicComponent } from './topic.component';
import { DSODTrendingComponent } from './trending.component';
import { DSODSponsoredAdComponent } from './sponsored-ad.component';
import { DSODMediaContentComponent } from './media-placeholder.component';
import { DSODContnetComponent } from './content-placeholder.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DSODRatingComponent,
    DSODTopicComponent,
    DSODTrendingComponent,
    DSODSponsoredAdComponent,
    DSODMediaContentComponent,
    DSODContnetComponent
  ],
  exports: [
    DSODRatingComponent,
    DSODTopicComponent,
    DSODTrendingComponent,
    DSODSponsoredAdComponent,
    DSODMediaContentComponent,
    DSODContnetComponent
  ]
})
export class SharedModule {}
