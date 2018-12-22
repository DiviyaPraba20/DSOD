import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DSODCommunityComponent } from './components/community/community.component';
import { DSODUniteMagazinePageComponent } from './containers/unite-magazine/unite-magazine.component';

const routes: Routes = [
  {
    path: '',
    component: DSODCommunityComponent
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
