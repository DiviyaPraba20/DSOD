import { Component, Input, OnInit } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'dsod-trending-item',
  template: `
    <div class="trending-block">
      <div class="trending-block-header">
        <a
          href="javascript:void(0)"
          (click)="onClickCategory(trendingItem.categoryId)"
        >
          <h4
            [ngClass]="{
              aln: sponsorName == 'ALN',
              nbl: sponsorName == 'NBL',
              gsk: sponsorName == 'GSK'
            }"
          >
            {{ trendingItem.categoryName }}
          </h4></a
        >
        <dsod-rating
          [avgRating]="trendingItem.avgCommentRating"
          readingType="short"
          [clickAble]="true"
          [contentId]="trendingItem.id"
          [title]="trendingItem.title"
          [commentsCount]="trendingItem.countOfComment"
          [sponsorName]="sponsorName"
        >
        </dsod-rating>
      </div>
      <div
        *ngIf="iFrameCode; else contentIframe"
        class="trending-block-video"
        [innerHTML]="iFrameCode"
      ></div>
      <ng-template #contentIframe>
        <div class="trending-block-video" [innerHTML]="iframe"></div>
      </ng-template>

      <a [routerLink]="['/video', trendingItem.id]">
        <div
          class="trending-block-caption"
          [ngClass]="{
            aln: sponsorName == 'ALN',
            nbl: sponsorName == 'NBL',
            gsk: sponsorName == 'GSK'
          }"
        >
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
  @Input() sponsorName: string;
  iframe: any;
  iFrameCode: any;

  constructor(private sanitizer: DomSanitizer, private router: Router) {}

  ngOnInit() {
    const regex = /(<iframe.+?<\/iframe>)/g;
    if (this.trendingItem.featuredMedia.type === '6') {
      this.iFrameCode = this.sanitizer.bypassSecurityTrustHtml(
        this.trendingItem.featuredMedia.code.iFrameCode
      );
    } else if (this.trendingItem.content.match(regex)) {
      this.iframe = this.trendingItem.content.match(regex).map(v => {
        return v;
      });
      this.iframe = this.sanitizer.bypassSecurityTrustHtml(this.iframe[0]);
    }
  }

  onClickCategory(e) {
    // this.router.navigate(['./category', e]);
  }
}
