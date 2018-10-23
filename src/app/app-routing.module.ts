import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule'
      },
      {
        path: 'events',
        loadChildren: './pages/events/events.module#EventsModule'
      },
      {
        path: 'article',
        loadChildren: './pages/article/article.module#ArticleModule'
      },
      {
        path: 'podcast',
        loadChildren: './pages/podcast/podcast.module#PodcastModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
