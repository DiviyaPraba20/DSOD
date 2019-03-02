import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, from, Subject } from 'rxjs';
import { CMSResponse, CMSPageContent, CMSContentTypeModel, CMSContentParams } from 'src/app/cms/models';
import { Store } from '@ngxs/store';
import * as actions from '../../../../cms/actions'
import { skip, takeLast, take, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dsod-sponsor-category-content',
  templateUrl: './sponsor-category-content-component.html',
  styleUrls: ['./sponsor-category-content-component.scss']
})
export class DSODSponsorCategoryContentComponent implements OnInit , OnDestroy {
  sponsorName:any
  sponsor: CMSContentTypeModel;
  featuredTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  latestTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  trendingTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  params: CMSContentParams = {
    skip: 0
  };
  _unsubscribeAll: Subject<any> = new Subject();
  storeSub: Subscription;
  constructor(private store:Store, private route:ActivatedRoute) {
  }

  ngOnInit(){
    this.route.params.subscribe(param => {
      this.sponsorName = param.name;
      this.getSponsorContent()
    })
    this.featuredTopics$ = this.store.select(state => state.cms.featuredTopics);
    this.latestTopics$ = this.store.select(state => state.cms.latestTopics);
    this.trendingTopics$ = this.store.select(state => state.cms.trendingTopics);
  }

  getSponsorContent(){
    this.storeSub = this.store.select(state => state.cms.sponsorsList)
      .pipe(takeUntil(this._unsubscribeAll)).subscribe(item => {
        if(item.length){
          this.sponsor = item.filter(o => o.name === this.sponsorName);
          this.store.dispatch(
            new actions.FetchFeaturedTopics({
              ...this.params,
              isFeatured: true,
              sponsorId: this.sponsor[0].id,
              limit: 6
            })
          );
          this.store.dispatch(
            new actions.FetchLatestTopics({
              ...this.params,
              isFeatured: false,
              sponsorId: this.sponsor[0].id,
              limit: 6
            })
          );
          this.store.dispatch(
            new actions.FetchTrendingTopics({
              ...this.params,
              limit: 4,
              sponsorId: this.sponsor[0].id,
              contentTypeId: "29"
            })
          );
        }
     
      });
  }
  ngOnDestroy(){
    this.storeSub.unsubscribe();
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
