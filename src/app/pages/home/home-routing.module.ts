import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DSODArticelComponent } from '../article/containers';
import { DSODPodcastComponent } from '../podcast/containers';
import { DSODVideoPageComponent } from '../video/containers/video-page/video-page.component';
import { DSODEventsPageComponent } from '../events/containers';
import { DSODEventDetailPageComponent } from '../events/containers/event-detail-page/event-detail-page.component';
import { VisualEssayComponent } from '../visual-essay/containers/visual-essay/visual-essay.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'events',
    component: DSODEventsPageComponent
  },
  {
    path: 'events/:id',
    component: DSODEventDetailPageComponent
  },
  {
    path: 'article/:id',
    component: DSODArticelComponent
  },
  {
    path: 'visual-essay/:id',
    component: VisualEssayComponent
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
