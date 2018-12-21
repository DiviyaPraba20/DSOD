import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { Router } from '@angular/router';

@Component({
  selector: 'dsod-sponsor-posts',
  templateUrl: './sponsor-posts.component.html',
  styleUrls: ['./sponsor-posts.component.scss']
})
export class SponsorPostsComponent implements OnInit {
  @Input() posts: CMSPageContent[];
  @Output() loadMore: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  navigateTo(e) {
    if (e.contentTypeName === 'Videos') {
      this.router.navigate(['./video', e.id]);
    } else if (e.contentTypeName === 'Podcasts') {
      this.router.navigate(['./podcast', e.id, 'author', 1]);
    } else {
      this.router.navigate(['./article', e.id]);
    }
  }

  onLoadMore() {
    this.loadMore.emit();
  }
}
