import { Component, Input, OnChanges } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-podcast-header',
  template: `
    <div
      class="top-head d-flex justify-content-between align-items-center"
      *ngIf="content"
    >
      <div class="pod-title d-flex align-items-center">
        <img src="assets/images/podcast-icon.png" alt="" />
        <h3>Podcasts</h3>
      </div>
      <span>{{ content.publishDate | date: 'mediumDate' }}</span>
      <span><dsod-bookmark></dsod-bookmark></span>
    </div>
  `,
  styleUrls: ['./podcast-header.component.scss']
})
export class DSODPodcastHeaderComponent {
  @Input()
  content: CMSPageContent;
}
