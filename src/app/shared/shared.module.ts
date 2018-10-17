import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSODRatingComponent } from './rating.component';
import { DSODTopicComponent } from './topic.component';
import { DSODTrendingComponent } from './trending.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DSODRatingComponent,
    DSODTopicComponent,
    DSODTrendingComponent
  ],
  exports: [DSODRatingComponent, DSODTopicComponent, DSODTrendingComponent]
})
export class SharedModule {}
