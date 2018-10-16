import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSODRatingComponent } from './rating.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DSODRatingComponent],
  exports: [DSODRatingComponent]
})
export class SharedModule {}
