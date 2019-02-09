import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-media-content',
  template: `
    <div class="trending-block">
      <div class="trending-block-header">
        <h4>{{ title }}</h4>
        <dsod-rating [avgRating]="topic.avgCommentRating" readingType="short" [clickAble]="true"
        [contentId]="topic.id" [title]="topic.title" [commentsCount]="topic.countOfComment"></dsod-rating>
      </div>
      <div class="trending-block-video">
        <img src="{{placeholderImageSrc}}" alt="" />
      </div>
      <div *ngIf="caption" class="trending-block-caption">
        <h4>{{ caption }}</h4>
      </div>
    </div>
  `,
  styleUrls: ['./media-placeholder.component.scss']
})
export class DSODMediaContentComponent {
  @Input() topic:CMSPageContent;
  @Input()
  title: string;
  @Input()
  placeholderImageSrc: string;
  @Input()
  url: string;
  @Input()
  caption: string;
  imageUrl;
}
