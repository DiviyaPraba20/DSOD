import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CMSPageContent } from 'src/app/cms/models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dsod-media-content',
  template: `
    <div class="trending-block">
      <div class="trending-block-header">
       <a href="javascript:void(0)" (click)="onClickCategory(topic.categoryId)"> <h4>{{ title }}</h4> </a>
        <dsod-rating [avgRating]="topic.avgCommentRating" readingType="short" [clickAble]="true"
        [contentId]="topic.id" [title]="topic.title" [commentsCount]="topic.countOfComment"></dsod-rating>
      </div>
      <div *ngIf="topic.featuredMedia?.type !== '6'" class="trending-block-video">
        <img src="{{placeholderImageSrc}}" alt="" />
      </div>
      <div *ngIf="topic.featuredMedia?.type === '6'" class="trending-block-video">
      <div  class="iframe-container" [innerHTML]="iFrameCode"></div>
      </div>
      <div *ngIf="caption" class="trending-block-caption">
        <h4>{{ caption }}</h4>
      </div>
    </div>
  `,
  styleUrls: ['./media-placeholder.component.scss']
})
export class DSODMediaContentComponent implements OnInit {
  @Input() topic: CMSPageContent;
  @Input() title: string;
  @Input() placeholderImageSrc: string;
  @Input() url: string;
  @Input() caption: string;

  imageUrl;
  iFrameCode: any;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    if (this.topic.featuredMedia.type === '6') {
      this.iFrameCode = this.sanitizer.bypassSecurityTrustHtml(this.topic.featuredMedia.code.iFrameCode);
    }
  }

  onClickCategory(e) {
    this.router.navigate(['./category', e]);
  }
}
