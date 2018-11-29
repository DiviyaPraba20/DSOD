import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DSODPreviewComponent } from './containers/preview.component';

const routes: Routes = [
  {
    path: 'preview/:id',
    component: DSODPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewRoutingModule {}
