import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  CMSPageContent,
  CMSContentParams,
  CMSContentTypeModel
} from 'src/app/cms/models';
import { Store } from '@ngxs/store';
import * as actions from '../../../../cms/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'dsod-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class DSODPodcastsComponent implements OnInit {
  @Input()
  contentType: CMSContentTypeModel;

  podcasts$: Observable<CMSPageContent[]>;
  indexStart = 0;
  indexEnd = 9;
  activePage = 1;
  params: CMSContentParams = {
    skip: 0,
    limit: 18
  };
  podcastItem: number;
  imageIndex = 0;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(
      new actions.FetchPodcasts({
        ...this.params,
        contentTypeId: this.contentType.id
      })
    );
    this.podcasts$ = this.store.select(state => state.cms.podcasts);
  }

  podcastPagination(e?, page?) {
    this.activePage = page;
    if (page == 1) {
      this.indexStart = 0;
      this.indexEnd = 9;
      this.imageIndex = 0;
    } else {
      this.indexStart = this.indexEnd;
      this.indexEnd += 9;
      this.imageIndex = 9;
    }
  }

  updateAuthors(e) {
    if (this.activePage === 1) {
      this.activePage += 1;
    } else {
      this.activePage -= 1;
    }
    this.podcastPagination(null, this.activePage);
  }
}
