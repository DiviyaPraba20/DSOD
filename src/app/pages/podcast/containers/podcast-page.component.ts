import { Component, OnInit, OnDestroy } from '@angular/core';
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

@Component({
  selector: 'dsod-podcast-page',
  templateUrl: './podcast-page.component.html',
  styleUrls: ['./podcast-page.component.scss']
})
export class DSODPodcastComponent implements OnInit, OnDestroy {
  contentId: string;
  content: any;
  params: CMSContentParams = {
    skip: 0,
    limit: 0
  };
  pageContent$: Observable<CMSResponse<CMSPageContent>>;
  podCasts$: Observable<CMSResponse<CMSPageContent>>;
  constructor(private _route: ActivatedRoute, private store: Store) {
    _route.params.subscribe(r => {
      this.contentId = r.id;
    });
    store.dispatch(new actions.FetchPageContent(this.contentId));
  }
  ngOnInit() {
    this.pageContent$ = this.store.select(state => state.cms.pageContent);
    this.podCasts$ = this.store.select(state => state.cms.podcasts);
  }

  ngOnDestroy() {
    this.store.dispatch(new actions.ResetState());
  }
}
