import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { CMSPageContent } from 'src/app/cms/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dsod-latest-item',
  templateUrl: './latest-item.component.html',
  styleUrls: ['./latest-item.component.scss']
})
export class DSODLatestItemComponent implements OnInit, OnChanges {
  @Input() latestTopic: CMSPageContent;

  iFrameCode: any;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.latestTopic.currentValue.featuredMedia.type === '6') {
      this.iFrameCode = this.sanitizer.bypassSecurityTrustHtml(this.latestTopic.featuredMedia.code.iFrameCode);
    }
  }

  navigateTo(latestTopic) {
    if (latestTopic.contentTypeName === 'Videos') {
      this.router.navigate(['./video', latestTopic.id]);
    } else if (latestTopic.contentTypeName === 'Podcasts') {
      this.router.navigate(['./podcast', latestTopic.id]);
    } else {
      this.router.navigate(['./article', latestTopic.id]);
    }
  }

  getImageUrl(id: string) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
