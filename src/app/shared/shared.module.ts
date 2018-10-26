import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShareButtonModule } from '@ngx-share/button';
import { SHARED_COMPONENTS, DSODAddReviewComponent } from './components';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, ShareButtonModule.forRoot()],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
  entryComponents: [DSODAddReviewComponent]
})
export class SharedModule {}
