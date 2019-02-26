import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-search-result-item',
  templateUrl: 'search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class DSODSearchItemComponent implements OnInit {
  @Input() topic: CMSPageContent;

  iFrameCode: any;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    if (this.topic.featuredMedia.type === '6') {
      this.iFrameCode = this.sanitizer.bypassSecurityTrustHtml(this.topic.featuredMedia.code.iFrameCode);
    }
  }

  navigateTo(result) {
    if (result.contentTypeName === 'Videos') {
      this.router.navigate(['./video', result.id]);
    } else if (result.contentTypeName === 'Articles') {
      this.router.navigate(['./article', result.id]);
    } else {
      this.router.navigate(['./podcast', result.id]);
    }
  }
}
