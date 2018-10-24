import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRoutingModule } from './video-routing.module';
import { VIDEO_CONTAINERS } from './containers';
import { VIDEO_COMPONENTS } from './components';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, VideoRoutingModule, SharedModule],
  declarations: [...VIDEO_CONTAINERS, ...VIDEO_COMPONENTS]
})
export class VideoModule {}
