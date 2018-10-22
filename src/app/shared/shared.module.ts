import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSODRatingComponent } from './rating.component';
import { DSODTopicComponent } from './topic.component';
import { DSODTrendingComponent } from './trending.component';
import { DSODSponsoredAdComponent } from './sponsored-ad.component';
import { DSODMediaContentComponent } from './media-placeholder.component';
import { DSODContnetComponent } from './content-placeholder.component';
import { DSODFilterSelectComponent } from './select/filter-select.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DSODRatingComponent,
    DSODTopicComponent,
    DSODTrendingComponent,
    DSODSponsoredAdComponent,
    DSODMediaContentComponent,
    DSODContnetComponent,
    DSODFilterSelectComponent
  ],
  exports: [
    DSODRatingComponent,
    DSODTopicComponent,
    DSODTrendingComponent,
    DSODSponsoredAdComponent,
    DSODMediaContentComponent,
    DSODContnetComponent,
    DSODFilterSelectComponent
  ]
})
export class SharedModule {}
