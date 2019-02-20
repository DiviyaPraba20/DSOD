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
      <span>{{content.categoryName}}</span>
      <span>{{content.title}}</span>
      <span><dsod-rating [avgRating]="content.avgCommentRating"></dsod-rating></span>
    </div>
  `,
  styleUrls: ['./podcast-header.component.scss']
})
export class DSODPodcastHeaderComponent {
  @Input()
  content: CMSPageContent;
}
