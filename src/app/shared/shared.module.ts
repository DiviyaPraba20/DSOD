import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShareButtonModule } from '@ngx-share/button';
import { SHARED_COMPONENTS, DSODAddReviewComponent } from './components';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ShareButtonModule.forRoot(),
    NgxSpinnerModule,
    NgSelectModule,
    UiSwitchModule,
    NgbModule.forRoot()
  ],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
  entryComponents: [DSODAddReviewComponent]
})
export class SharedModule {}
