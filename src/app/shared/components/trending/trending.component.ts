import { Component, Input, OnInit } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dsod-trending-item',
  template: `
    <div class="trending-block">
        <div class="trending-block-header">
          <h4>{{ trendingItem.categoryName }}</h4>
           <dsod-rating [avgRating]="trendingItem.avgCommentRating" readingType="short" [clickAble]="true"
        [contentId]="trendingItem.id" [title]="trendingItem.title" [commentsCount]="trendingItem.countOfComment"></dsod-rating>
        </div>
        <div class="trending-block-video" [innerHTML]="iframe"></div>
        <a [routerLink]="['/video', trendingItem.id]">
        <div class="trending-block-caption">
          <h4>{{ trendingItem.title }}</h4>
        </div>
        </a>
      </div>
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
