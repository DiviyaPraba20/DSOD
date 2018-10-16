import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSODRatingComponent } from './rating.component';
import { DSODTopicComponent } from './topic.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DSODRatingComponent, DSODTopicComponent],
  exports: [DSODRatingComponent, DSODTopicComponent]
})
export class SharedModule {}
