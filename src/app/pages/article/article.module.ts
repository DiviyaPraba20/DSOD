import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARTICLE_COMPONENTS } from './components';
import { ARTICLE_CONTAINERS } from './containers';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  imports: [CommonModule, ArticleRoutingModule, SharedModule],
  declarations: [...ARTICLE_CONTAINERS, ...ARTICLE_COMPONENTS]
})
export class ArticleModule {}
