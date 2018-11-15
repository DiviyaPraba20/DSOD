import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as actions from '../../../cms/actions';
import { Store } from '@ngxs/store';
import {
  CMSPageContent,
  CMSResponse,
  CMSContentParams
} from 'src/app/cms/models';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { AuthState } from '../../auth/states/auth.state';
import { Authors } from '../../../shared/authors/authors';

@Component({
  selector: 'dsod-podcast-page',
  templateUrl: './podcast-page.component.html',
  styleUrls: ['./podcast-page.component.scss']
})
export class DSODPodcastComponent implements OnInit {
  authors = Authors;
  contentId: string;
  content: any;
  params: CMSContentParams = {
    skip: 0,
    limit: 0
  };
  authorId: number;
  pageContent$: Observable<CMSResponse<CMSPageContent>>;
  podCasts$: Observable<CMSResponse<CMSPageContent>>;
  isLoggedIn: boolean;
  constructor(private _route: ActivatedRoute, private store: Store) {
    _route.params.subscribe(r => {
      this.contentId = r.id;
      this.authorId = r.authorId;
      store.dispatch(new actions.FetchPageContent(this.contentId));
    });
  }
  ngOnInit() {
    this.isLoggedIn = this.store.selectSnapshot(AuthState.isLoggedIn);
    this.pageContent$ = this.store.select(state => state.cms.pageContent);

    this.podCasts$ = this.store.select(state => state.cms.podcasts);
    this.pageContent$.pipe(skip(1)).subscribe(c => {
      this.content = c;
    });
  }
}
