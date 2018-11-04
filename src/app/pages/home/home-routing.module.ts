import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DSODArticelComponent } from '../article/containers';
import { DSODPodcastComponent } from '../podcast/containers';
import { DSODVideoPageComponent } from '../video/containers/video-page/video-page.component';
import { DSODEventsPageComponent } from '../events/containers';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'events/:id',
    component: DSODEventsPageComponent
  },
  {
    path: 'article/:id',
    component: DSODArticelComponent
  },
  {
    path: 'podcast/:id',
    component: DSODPodcastComponent
  },
  {
    path: 'video/:id',
    component: DSODVideoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
