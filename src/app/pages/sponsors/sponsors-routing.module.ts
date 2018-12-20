import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorsContainerComponent } from './components/sponsors-container/sponsors-container.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SponsorsContainerComponent
      },
      {
        path: ':name',
        component: SponsorsContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorsRoutingModule { }
