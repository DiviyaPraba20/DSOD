import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { CMSPageContent } from 'src/app/cms/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dsod-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class DSODLatestComponent implements OnInit {
  @Input() latestTopics: CMSPageContent[];

  iFrameCode: any;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    console.log('latestComponent = ', this.latestTopics);
    if (this.latestTopics[0] && this.latestTopics[0].featuredMedia && this.latestTopics[0].featuredMedia.type === '6') {
      this.iFrameCode = this.sanitizer.bypassSecurityTrustHtml(this.latestTopics[0].featuredMedia.code.iFrameCode);
    }
  }

  navigateTo(content: CMSPageContent) {
    if (content.contentTypeName === 'Videos') {
      this.router.navigate(['./video', content.id]);
    } else {
      this.router.navigate(['./article', content.id]);
    }
  }

  getImageUrl(id: string) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
