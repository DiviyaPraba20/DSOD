import { Component, OnInit, OnDestroy } from '@angular/core';
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
  selector: 'dsod-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class DSODArticelComponent implements OnInit, OnDestroy {
  trendingTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  params: CMSContentParams = {
    skip: 0
  };
  contentId: string;
  pageContent$: Observable<CMSResponse<any>>;
  isLoggedIn: boolean;
  constructor(private _route: ActivatedRoute, private store: Store) {
    this.isLoggedIn = store.selectSnapshot(AuthState.isLoggedIn);
    _route.params.subscribe(r => {
      this.contentId = r.id;
    });
    store.dispatch(
      new actions.FetchTrendingTopics({ ...this.params, limit: 3 })
    );
    store.dispatch(new actions.FetchPageContent(this.contentId));
  }
  ngOnInit() {
    this.trendingTopics$ = this.store.select(state => state.cms.trendingTopics);
    this.pageContent$ = this.store.select(state => state.cms.pageContent);
  }

  ngOnDestroy() {
    this.store.dispatch(new actions.ResetState());
  }
}
