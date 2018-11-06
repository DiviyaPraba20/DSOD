import { Component, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-article-media',
  templateUrl: './article-media.component.html',
  styleUrls: ['./article-media.component.scss']
})
export class DSODArticleMediaComponent {
  @Input()
  content: CMSPageContent;
  constructor() {}
}
