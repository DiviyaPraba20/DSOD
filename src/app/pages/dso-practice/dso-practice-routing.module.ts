import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DSODPracticePageComponent } from './containers/dso-practice/dso-practice.component';

const routes: Routes = [
  {
    path: '',
    component: DSODPracticePageComponent
  },
  {
    path: ':id',
    component: DSODPracticePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DSOPracticeRoutingModule {}
