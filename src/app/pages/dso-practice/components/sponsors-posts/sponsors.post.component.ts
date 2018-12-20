import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  FetchSponsoredTopics,
  FetchSponsorsList,
  ResetState
} from 'src/app/cms/actions';
import {
  CMSContentParams,
  CMSContentTypeModel,
  CMSPageContent,
  CMSResponse
} from 'src/app/cms/models';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'dsod-pracrices-sposnors-post',
  templateUrl: 'sponsors-post.component.html',
  styleUrls: ['./sponsors-post.component.scss']
})
export class DSODPracticesSponsorsComponent implements OnInit, OnDestroy {
  @Input() contentType: CMSContentTypeModel;
  storeSub: Subscription;
  sponsoredTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  params: CMSContentParams = {
    skip: 0,
    limit: 1
  };
  constructor(private store: Store, private router: Router) {
    store.dispatch(new FetchSponsorsList());
    this.storeSub = store
      .select(state => state.cms.sponsorsList)
      .pipe(skip(1))
      .subscribe(item => {
        this.store.dispatch(
          new FetchSponsoredTopics({
            ...this.params,
            limit: 1,
            sponsorId: '197',
            contentTypeId: this.contentType[0] ? this.contentType[0].id : null
          })
        );
        this.store.dispatch(
          new FetchSponsoredTopics({
            ...this.params,
            limit: 1,
            sponsorId: '502',
            contentTypeId: this.contentType[0] ? this.contentType[0].id : null
          })
        );
      });
  }

  ngOnInit() {
    this.sponsoredTopics$ = this.store.select(
      state => state.cms.sponsoredTopics
    );
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
    this.store.dispatch(new ResetState());
  }

  navigateTo(e) {
    if (e.contentTypeName === 'Videos') {
      this.router.navigate(['./video', e.id]);
    } else if (e.contentTypeName === 'Podcasts') {
      this.router.navigate(['./podcast', e.id, 'author', 1]);
    } else {
      this.router.navigate(['./article', e.id]);
    }
  }
}
