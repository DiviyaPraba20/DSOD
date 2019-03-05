import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-sponsor-posts',
  templateUrl: './sponsor-posts.component.html',
  styleUrls: ['./sponsor-posts.component.scss']
})
export class SponsorPostsComponent implements OnInit {
  @Input() posts: CMSPageContent[];
  @Output() loadMore: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() { }

  navigateTo(e) {
    if (e.contentTypeName === 'Videos') {
      this.router.navigate(['./video', e.id]);
    } else if (e.contentTypeName === 'Podcasts') {
      this.router.navigate(['./podcast', e.id]);
    } else if (e.contentTypeName === 'Visual Essay') {
      this.router.navigate(['./visual-essay', e.id]);
    } else {
      this.router.navigate(['./article', e.id]);
    }
  }

  onLoadMore() {
    this.loadMore.emit();
  }

  getIFrameCode(iFrameCode) {
    return this.sanitizer.bypassSecurityTrustHtml(iFrameCode);
  }
}
