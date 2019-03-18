import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { CMSPageContent } from 'src/app/cms/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dsod-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class DSODLatestComponent implements OnInit, OnChanges {
  @Input() sponsorName: string;
  @Input() latestTopics: CMSPageContent[];

  iFrameCode: any;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.latestTopics && changes.latestTopics.currentValue.length
      && changes.latestTopics.currentValue[0].featuredMedia
      && changes.latestTopics.currentValue[0].featuredMedia.type === '6') {
      this.iFrameCode = this.sanitizer.bypassSecurityTrustHtml(this.latestTopics[0].featuredMedia.code.iFrameCode);
    }
  }

  navigateTo(content: CMSPageContent) {
    if (content.contentTypeName === 'Videos') {
      this.router.navigate(['./video', content.id]);
    } else if (content.contentTypeName === 'Podcasts') {
      this.router.navigate(['./podcast', content.id]);
    } else {
      this.router.navigate(['./article', content.id]);
    }
  }

  getImageUrl(id: string) {
    let url = `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
    console.log("getImageUrl() called URL populated ==> " + url)
    return url;
  }
}
