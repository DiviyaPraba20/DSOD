import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShareButtonModule } from '@ngx-share/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SHARED_COMPONENTS, DSODAddReviewComponent } from './components';
import { AvatarCropperComponent } from './components/avatar-cropper/avatar-cropper.component';
import { DSODConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { TruncatePipe } from './pipe/truncate-pipe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ShareButtonModule.forRoot(),
    NgxSpinnerModule,
    NgSelectModule,
    UiSwitchModule,
    NgbModule.forRoot(),
    ImageCropperModule
  ],
  declarations: [...SHARED_COMPONENTS, TruncatePipe],
  exports: [...SHARED_COMPONENTS, TruncatePipe],
  entryComponents: [
    DSODAddReviewComponent,
    AvatarCropperComponent,
    DSODConfirmDialogComponent
  ]
})
export class SharedModule {}
