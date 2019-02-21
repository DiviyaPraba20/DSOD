import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualEssayComponent } from './containers/visual-essay/visual-essay.component';

const routes: Routes = [{
  path: '',
  component: VisualEssayComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualEssayRoutingModule { }
