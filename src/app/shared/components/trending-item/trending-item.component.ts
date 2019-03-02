import { Component, Input, OnInit } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'dsod-trending-item',
  template: `
    <div class="trending-block">
        <div class="trending-block-header">
         <a href="javascript:void(0)" (click)="onClickCategory(trendingItem.categoryId)"> <h4 [ngClass]="{'aln':sponsorName=='ALN','nbl':sponsorName=='NBL','gsk':sponsorName=='GSK'}">{{ trendingItem.categoryName }}</h4></a>
           <dsod-rating
            [avgRating]="trendingItem.avgCommentRating"
            readingType="short"
            [clickAble]="true"
            [contentId]="trendingItem.id"
            [title]="trendingItem.title"
            [commentsCount]="trendingItem.countOfComment" [sponsorName]="sponsorName">
          </dsod-rating>
        </div>
        <div class="trending-block-video" [innerHTML]="iframe"></div>
        <a [routerLink]="['/video', trendingItem.id]">
          <div class="trending-block-caption" [ngClass]="{'aln':sponsorName=='ALN','nbl':sponsorName=='NBL','gsk':sponsorName=='GSK'}">
            <h4>{{ trendingItem.title }}</h4>
          </div>
        </a>
      </div>
  `,
  styleUrls: ['./trending-item.component.scss']
})
export class DSODTrendingItemComponent implements OnInit {
  @Input()
  trendingItem: CMSPageContent;
  @Input()
  showCaption: boolean;
  @Input()
  showSummary: boolean;
  @Input() sponsorName:string;
  iframe: any;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit() {
    const regex = /(<iframe.+?<\/iframe>)/g;
    this.iframe = this.trendingItem.content.match(regex).map(v => {
      return v;
    });
    this.iframe = this.sanitizer.bypassSecurityTrustHtml(this.iframe[0]);
  }

  onClickCategory(e) {
    this.router.navigate(['./category', e]);
  }
}
