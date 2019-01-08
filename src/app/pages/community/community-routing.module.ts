import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DSODCommunityComponent } from './components/community/community.component';
import { DSODUniteMagazinePageComponent } from './components/unite-magazine/unite-magazine.component';
import { CommunityContainerComponent } from './containers/community-container.component';

const routes: Routes = [
  {
    path: '',
    component: CommunityContainerComponent,
    children: [
      {
        path: '',
        component: DSODCommunityComponent
      }
    ]
  },
  {
    path: 'unite',
    component: DSODUniteMagazinePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule {}
