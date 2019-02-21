import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DSODPreviewComponent } from './containers/preview.component';
import { VisualEssayPreviewComponent } from './components/visual-essay-preview/visual-essay-preview.component';

const routes: Routes = [{
  path: 'preview/visual-essay/:id',
  component: VisualEssayPreviewComponent
}, {
  path: 'preview/:id',
  component: DSODPreviewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewRoutingModule {}
