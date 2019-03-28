import { Component, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-our-sponsors',
  templateUrl: './our-sponsors.component.html',
  styleUrls: ['./our-sponsors.component.scss']
})
export class DSODOurSponsorsComponent {
  @Input()
  sponsoredTopics: CMSPageContent[];
  @Input()
  featuredTopics: CMSPageContent[];
  constructor() {}
}
