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

@NgModule({
  imports: [CommonModule],
  declarations: [
    DSODRatingComponent,
    DSODTopicComponent,
    DSODTrendingComponent,
    DSODSponsoredAdComponent,
    DSODMediaContentComponent,
    DSODContnetComponent,
    DSODFilterSelectComponent,
    DSODContentActionComponent
  ],
  exports: [
    DSODRatingComponent,
    DSODTopicComponent,
    DSODTrendingComponent,
    DSODSponsoredAdComponent,
    DSODMediaContentComponent,
    DSODContnetComponent,
    DSODFilterSelectComponent,
    DSODContentActionComponent
  ]
})
export class SharedModule {}
