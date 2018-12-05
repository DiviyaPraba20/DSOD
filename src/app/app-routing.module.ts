import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
