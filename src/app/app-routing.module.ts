import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DSODComingSoonComponent } from './shared/components/coming soon/coming-soon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'education',
        loadChildren: './pages/education/education.module#EducationModule'
      },
      {
        path: 'careers',
        loadChildren: './pages/career/career.module#CareerModule'
      },
      {
        path: 'sponsors/:name',
        loadChildren: './pages/sponsors/sponsors.module#SponsorsModule'
      },
      {
        path: 'development',
        loadChildren: './pages/development/development.module#DevelopmentModule'
      },
      {
        path: 'community',
        loadChildren: './pages/community/community.module#CommunityModule'
      },
      {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule'
      }
    ]
  },
  {
    path: '**',
    component: DSODComingSoonComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
