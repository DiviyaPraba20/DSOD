import { Component, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-podcast-content',
  templateUrl: './podcast-content.component.html',
  styleUrls: ['./podcast-content.component.scss']
})
export class DSODPodcastContentComponent {
  @Input()
  content: CMSPageContent;
}
