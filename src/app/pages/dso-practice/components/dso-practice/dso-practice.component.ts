import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CMSContentParams, CMSContentTypeModel } from 'src/app/cms/models';
import { Store } from '@ngxs/store';
import { FetchContentTypes, FetchSponsorsList } from 'src/app/cms/actions';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'dsod-dso-practice',
  templateUrl: './dso-practice.component.html',
  styleUrls: ['./dso-practice.component.scss']
})
export class DSODPracticePageComponent implements OnInit, OnDestroy {
  contentTypes$: Observable<CMSContentTypeModel[]>;
  sponsorsList$: Observable<CMSContentTypeModel[]>;
  contentTypesSub:Subscription
  params: CMSContentParams = {
    skip: 0
  };
  other = [];
  videoType: any;
  podcastType: any;
  articleType: any;
  visualEssay: any;
  selectedTab = 'All';
  constructor(private store: Store) {
    store.dispatch(new FetchContentTypes());
    this.contentTypes$ = this.store.select(state => state.cms.contentTypes);
    this.sponsorsList$ = this.store.select(state => state.cms.sponsorsList);
  }
  ngOnInit() {
    this.contentTypesSub=this.store
      .select(state => state.cms.contentTypes)
      .pipe(skip(1))
      .subscribe(item => {
        this.podcastType = item.filter(o => o.name === 'Podcasts');
        this.videoType = item.filter(o => o.name === 'Videos');
        this.articleType = item.filter(o => o.name === 'Articles');
        this.visualEssay = item.filter(o => o.name === 'Visual Essay');
      });
  }

  filterType(tabName: string) {
    this.selectedTab = tabName;
  }

  ngOnDestroy(){
    this.contentTypesSub.unsubscribe();
  }
}
