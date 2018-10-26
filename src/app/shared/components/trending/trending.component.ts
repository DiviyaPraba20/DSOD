import { Component, Input } from '@angular/core';

@Component({
  selector: 'dsod-trending-item',
  template: `<a [routerLink]="['/video']"><div class="trending-block">
							<div class="trending-block-header">
								<h4>{{trendingItem.title}}</h4>
								<dsod-rating></dsod-rating>
							</div>
							<div class="trending-block-video">
								<img src={{trendingItem.url}} alt="">
								<a href="#" class="play-icon">
								<img src="assets/images/play.png" alt="">
								</a>
							</div>
							<div class="trending-block-caption">
								<h4>{{trendingItem.caption}}</h4>
							</div>
					</div></a>`,
  styleUrls: ['./trending.component.scss']
})
export class DSODTrendingComponent {
  @Input()
  trendingItem;
  @Input()
  showCaption: boolean;
  @Input()
  showSummary: boolean;

  constructor() {}
}
