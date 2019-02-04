import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import * as actions from '../../../../cms/actions';
import { Router, ActivatedRoute } from '@angular/router';
import {
  CMSContentParams,
  CMSResponse,
  CMSPageContent
} from 'src/app/cms/models';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/pages/auth/states/auth.state';

@Component({
  selector: 'd',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class DSODVideoPageComponent implements OnInit {
  avgRating: any;
  trendingTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  params: CMSContentParams = {
    skip: 0
  };
  pageContent$: Observable<CMSPageContent>;
  isLoggedIn: boolean;
  constructor(private _route: ActivatedRoute, private store: Store) {
    this.isLoggedIn = store.selectSnapshot(AuthState.isLoggedIn);
    _route.params.subscribe(r => {
      this.store.dispatch(
        new actions.FetchTrendingTopics({ ...this.params, limit: 3 })
      );
      this.store.dispatch(new actions.FetchPageContent(r.id));
    });
  }
  ngOnInit() {
    this.trendingTopics$ = this.store.select(state => state.cms.trendingTopics);
    this.pageContent$ = this.store.select(state => state.cms.pageContent);
  }

  updateRating(e) {
    this.avgRating = e;
  }
}
