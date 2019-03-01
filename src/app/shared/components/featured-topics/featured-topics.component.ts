import { Component, Input, OnChanges } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-featured-topics',
  templateUrl: './featured-topics.component.html',
  styleUrls: ['./featured-topics.component.scss']
})
export class DSODFeaturedTopicsComponent {
  @Input()
  featuredTopics: CMSPageContent[];
  constructor() {}
}
