import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorContentComponent } from './components/sponsor-content/sponsor-content.component';
import { SponsorsContainerComponent } from './container/sponsors-container.component';

const routes: Routes = [
  {
    path: '',
    component: SponsorsContainerComponent,
    children: [
      {
        path: '',
        component: SponsorContentComponent
      },
      {
        path: ':name',
        component: SponsorContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorsRoutingModule { }
