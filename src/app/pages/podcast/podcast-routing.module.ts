import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DSODPodcastComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: DSODPodcastComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastRoutingModule {}
