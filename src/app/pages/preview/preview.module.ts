import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PREIVEW_CONTAINERS } from './containers';
import { PREVIEW_COMPONENTS } from './components';
import { SharedModule } from 'src/app/shared/shared.module';
import { PreviewRoutingModule } from './preview-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, PreviewRoutingModule],
  declarations: [...PREIVEW_CONTAINERS, ...PREVIEW_COMPONENTS]
})
export class PreviewModule {}
