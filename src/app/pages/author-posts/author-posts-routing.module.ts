import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DSODAuthorPostsComponent } from './containers/author-posts.component';

const routes: Routes = [
  {
    path: ':id',
    component: DSODAuthorPostsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorPostsRoutingModule { }
