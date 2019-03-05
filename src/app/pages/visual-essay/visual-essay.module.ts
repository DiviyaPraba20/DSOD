import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualEssayRoutingModule } from './visual-essay-routing.module';
import { VisualEssayComponent } from './containers/visual-essay/visual-essay.component';
import { SharedModule } from '../../shared/shared.module';
import { ArticleModule } from '../article/article.module';

@NgModule({
  imports: [
    CommonModule,
    VisualEssayRoutingModule,
    SharedModule
  ],
  declarations: [VisualEssayComponent]
})
export class VisualEssayModule { }
