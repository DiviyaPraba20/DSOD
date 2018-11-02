import { Component, Input, OnInit } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-trending-item',
  template: `<a *ngIf="trendingItem.videos" [routerLink]="['/video']"><div class="trending-block">
							<div class="trending-block-header">
								<h4>{{trendingItem.categoryName}}</h4>
								<dsod-rating></dsod-rating>
							</div>
							<div class="trending-block-video">
								<video  src="https://devcmsapi1.dsodentist.com/content/contentservice/v1/file/downloadFileByObjectId?objectId={{trendingItem.videos[0]}}" controls="false" poster="https://devcmsapi1.dsodentist.com/content/contentservice/v1/file/downloadFileByObjectId?objectId={{trendingItem.featuredMediaId}}"></video>
							</div>
							<div class="trending-block-caption">
								<h4>{{trendingItem.title}}</h4>
							</div>
					</div></a>`,
  styleUrls: ['./trending.component.scss']
})
export class DSODTrendingItemComponent {
  @Input()
  trendingItem: CMSPageContent;
  @Input()
  showCaption: boolean;
  @Input()
  showSummary: boolean;

  constructor() {}
}
