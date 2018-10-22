import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DSODArticelComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: DSODArticelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {}
