import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DSODVideoPageComponent } from './containers/video-page/video-page.component';

const routes: Routes = [
  {
    path: '',
    component: DSODVideoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule {}
