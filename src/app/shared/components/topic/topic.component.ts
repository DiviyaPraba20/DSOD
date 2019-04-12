import { Component, Input, OnInit } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dsod-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class DSODTopicComponent implements OnInit {
  @Input() topic: CMSPageContent;
  @Input() showImage?: boolean;
  @Input() showHeader?: boolean;
  @Input() styleFor: string;
  @Input() showRating: boolean;
  @Input() imgLarge?: boolean;
  @Input() contentLength?: number;
  @Input() sponsorName: string;

  iFrameCode: any;
  featuredImageUrl: string;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    if (this.topic.featuredMedia.type === '6') {
      this.iFrameCode = this.sanitizer.bypassSecurityTrustHtml(this.topic.featuredMedia.code.iFrameCode);
    }
    this.featuredImageUrl = `${environment.url}/file/downloadFileByObjectId?objectId=${this.topic.featuredMedia.code.original}`;
  }

  navigateTo(e) {
    if (this.topic.contentTypeName === 'Videos') {
      this.router.navigate(['./video', this.topic.id]);
    } else if (this.topic.contentTypeName === 'Podcasts') {
      this.router.navigate(['./podcast', this.topic.id]);
    } else if (this.topic.contentTypeName === 'Visual Essay') {
      this.router.navigate(['./visual-essay', this.topic.id]);
    } else {
      this.router.navigate(['./article', this.topic.id]);
    }
  }

  onClickCategory(e) {
    // this.router.navigate(['./category', e]);
  }

  onClickAuthor(id) {
    this.router.navigate(['contents/author', id]);
  }

  getImageUrl(id: string) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
