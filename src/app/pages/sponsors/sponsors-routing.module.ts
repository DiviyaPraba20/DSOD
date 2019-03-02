import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorContentComponent } from './components/sponsor-content/sponsor-content.component';
import { DSODSponsorsContainerComponent } from './container/sponsors-container.component';
import { DSODSponsorsPageComponent } from './container/sponsor-page/sponsor-page.component';
import { DSODSponsorContainerComponent } from './container/sponsor/sponsor-container.component';

const routes: Routes = [
  {
    path: '',
    component: DSODSponsorsPageComponent,
    children: [
      {
        path: '',
        component: DSODSponsorsContainerComponent
      },
      {
        path: ':name',
        component: DSODSponsorContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorsRoutingModule { }
