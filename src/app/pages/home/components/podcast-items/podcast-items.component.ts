import { Component, Input, OnChanges } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-podcast-items',
  templateUrl: './podcast-items.component.html',
  styleUrls: ['./podcast-items.component.scss']
})
export class DSODPodcastItemsComponent {
  @Input()
  podcasts: CMSPageContent[];
  @Input() imageIndex;
  @Input() indexEnd;
  @Input() indexStart;
  constructor() {}
}
