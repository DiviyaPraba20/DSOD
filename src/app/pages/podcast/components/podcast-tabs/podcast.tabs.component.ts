import { Component, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-podcast-tabs',
  templateUrl: './podcast.tabs.component.html',
  styleUrls: ['./podcast.tabs.component.scss']
})
export class DSODPodcastTabsComponent {
  @Input()
  content: CMSPageContent;
  constructor() {}
}
