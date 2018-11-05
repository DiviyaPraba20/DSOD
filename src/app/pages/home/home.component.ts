import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Store } from '@ngxs/store';
import * as actions from '../../cms/actions';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import {
  CMSResponse,
  CMSPageContent,
  CMSContentParams
} from 'src/app/cms/models';
import {
  FetchLatestTopics,
  FetchFeaturedTopics,
  FetchPodcasts,
  FetchTrendingTopics,
  FetchSponsoredTopics
} from '../../cms/actions';

@Component({
  selector: 'dsod-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn$ = this.authService.isLoggedIn$;

  featuredTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  latestTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  trendingTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  podcasts$: Observable<CMSResponse<CMSPageContent[]>>;
  sponsoredTopics$: Observable<CMSResponse<CMSPageContent[]>>;

  params: CMSContentParams = {
    skip: 0
  };

  constructor(
    private store: Store,
    private authService: AuthService
  ) {
    store.dispatch(new actions.FetchContentTypes());
    store.dispatch(new actions.FetchSponsorsList());
    store
      .select(state => state.cms.contentTypes)
      .pipe(skip(1))
      .subscribe(item => {
        let podcastTypeId = item.filter(o => o.name == 'Podcasts');
        let videoTypeId = item.filter(o => o.name == 'Videos');
        let articleTypeId = item.filter(o => o.name == 'Articles');
        this.store.dispatch(
          new FetchFeaturedTopics({
            ...this.params,
            isFeatured: true,
            limit: 5
          })
        );
        this.store.dispatch(
          new FetchLatestTopics({
            ...this.params,
            limit: 6
          })
        );
        this.store.dispatch(
          new FetchPodcasts({
            ...this.params,
            limit: 9,
            contentTypeId: podcastTypeId[0].id
          })
        );
        this.store.dispatch(
          new FetchTrendingTopics({
            ...this.params,
            limit: 0,
            contentTypeId: videoTypeId[0].id
          })
        );
        this.store.dispatch(
          new FetchSponsoredTopics({
            ...this.params,
            limit: 4
          })
        );
      });
  }

  ngOnInit() {
    this.featuredTopics$ = this.store.select(state => state.cms.featuredTopics);
    this.latestTopics$ = this.store.select(state => state.cms.latestTopics);
    this.trendingTopics$ = this.store.select(state => state.cms.trendingTopics);
    this.podcasts$ = this.store.select(state => state.cms.podcasts);
    this.sponsoredTopics$ = this.store.select(
      state => state.cms.sponsoredTopics
    );
  }
}
