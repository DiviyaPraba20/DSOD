import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DSODEventsPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: DSODEventsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {}
