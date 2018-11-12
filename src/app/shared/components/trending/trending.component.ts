import { Component, Input, OnInit } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dsod-trending-item',
  template: `
    <a [routerLink]="['/video', trendingItem.id]"
      ><div class="trending-block">
        <div class="trending-block-header">
          <h4>{{ trendingItem.categoryName }}</h4>
          <dsod-rating [rating]="trendingItem.avgCommentRating"></dsod-rating>
        </div>
        <div class="trending-block-video" [innerHTML]="iframe"></div>
        <div class="trending-block-caption">
          <h4>{{ trendingItem.title }}</h4>
        </div>
      </div></a
    >
  `,
  styleUrls: ['./trending.component.scss']
})
export class DSODTrendingItemComponent implements OnInit {
  @Input()
  trendingItem: CMSPageContent;
  @Input()
  showCaption: boolean;
  @Input()
  showSummary: boolean;
  iframe: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const regex = /(<iframe.+?<\/iframe>)/g;
    this.iframe = this.trendingItem.content.match(regex).map(v => {
      return v;
    });
    this.iframe = this.sanitizer.bypassSecurityTrustHtml(this.iframe[0]);
  }
}
