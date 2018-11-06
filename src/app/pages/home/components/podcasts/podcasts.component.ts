import { Component, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { Authors } from '../../../../shared/authors/authors';

@Component({
  selector: 'dsod-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class DSODPodcastsComponent {
  @Input()
  podcasts: CMSPageContent[];
  authors = Authors;
  indexStart = 0;
  indexEnd = 9;
  activePage = 1;

  constructor() {}

  updateAuthors() {
    if (this.activePage == 1) this.activePage += 1;
    else {
      this.activePage -= 1;
    }
    this.podcastPagination(null, this.activePage);
  }
  podcastPagination(e?, page?) {
    this.activePage = page;
    if (page == 1) {
      this.indexStart = 0;
      this.indexEnd = 9;
    } else {
      this.indexStart = this.indexEnd;
      this.indexEnd += 9;
    }
  }
}
