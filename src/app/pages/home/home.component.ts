import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Store } from '@ngxs/store';
import * as actions from '../../cms/actions';
import { Observable, Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { GetUserInfo } from '../auth/actions/auth.actions';
import {
  CMSResponse,
  CMSPageContent,
  CMSContentParams,
  CMSContentTypeModel
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
export class HomeComponent implements OnInit, OnDestroy {
  isLoggedIn$ = this.authService.isLoggedIn$;

  featuredTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  latestTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  trendingTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  podcasts$: Observable<CMSResponse<CMSPageContent[]>>;
  sponsoredTopics$: Observable<CMSResponse<CMSPageContent[]>>;

  params: CMSContentParams = {
    skip: 0
  };
  podcastType: CMSContentTypeModel;
  videoType: CMSContentTypeModel;
  storeSub: Subscription;

  constructor(private store: Store, private authService: AuthService) {
    store.dispatch(new actions.FetchContentTypes());
    store.dispatch(new actions.FetchSponsorsList());
    this.storeSub = store.select(state => state.cms.contentTypes)
      .pipe(skip(1)).subscribe(item => {
        this.podcastType = item.filter(o => o.name === 'Podcasts');
        this.videoType = item.filter(o => o.name === 'Videos');
        this.store.dispatch(
          new FetchFeaturedTopics({
            ...this.params,
            isFeatured: true,
            limit: 6
          })
        );
        this.store.dispatch(
          new FetchLatestTopics({
            ...this.params,
            isFeatured: false,
            limit: 6
          })
        );
        this.store.dispatch(
          new FetchTrendingTopics({
            ...this.params,
            limit: 4,
            contentTypeId: this.videoType[0].id
          })
        );
        this.store.dispatch(
          new FetchSponsoredTopics({
            ...this.params,
            limit: 1,
            sponsorId: '260'
          })
        );
        this.store.dispatch(
          new FetchSponsoredTopics({
            ...this.params,
            limit: 1,
            sponsorId: '502'
          })
        );
        this.store.dispatch(
          new FetchSponsoredTopics({
            ...this.params,
            limit: 1,
            sponsorId: '197'
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

    this.isLoggedIn$.subscribe(res => {
      if (res) {
        const userInfo = this.authService.getUserInfoFromToken();
        if (userInfo && userInfo.user_name) {
          this.store.dispatch(
            new GetUserInfo({
              email: userInfo.user_name
            })
          );
        }
      }
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new actions.ResetState());
    this.storeSub.unsubscribe();
  }
}
