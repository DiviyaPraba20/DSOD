import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, Subscription, from, Subject } from 'rxjs';
import { CMSResponse, CMSPageContent, CMSContentTypeModel, CMSContentParams } from 'src/app/cms/models';
import { Store, ofActionDispatched, Actions } from '@ngxs/store';
import * as actions from '../../../../cms/actions'
import { skip, takeLast, take, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FetchLatestTopics, FetchTrendingTopics } from '../../../../cms/actions';

@Component({
  selector: 'dsod-sponsor-category-content',
  templateUrl: './sponsor-category-content-component.html',
  styleUrls: ['./sponsor-category-content-component.scss']
})
export class DSODSponsorCategoryContentComponent implements OnInit , OnDestroy {
  @Input() categoryId:string;
  isLoading:boolean;
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
  constructor(private store: Store, private route: ActivatedRoute, private actions$: Actions,
    private spinnerService: NgxSpinnerService,) {
  }

  ngOnInit(){
    this.route.params.subscribe(param => {
      this.sponsorName = param.name;
      this.getSponsorContent()
    })
    this.featuredTopics$ = this.store.select(state => state.cms.featuredTopics);
    this.latestTopics$ = this.store.select(state => state.cms.latestTopics);
    this.trendingTopics$ = this.store.select(state => state.cms.trendingTopics);
    this.actions$.pipe(ofActionDispatched(actions.FetchFeaturedTopics, FetchLatestTopics, FetchTrendingTopics)).subscribe(data => {
      this.spinnerService.show();
      this.isLoading = true;
    });
    this.actions$.pipe(ofActionDispatched(actions.FetchFeaturedTopicsSuccess, actions.FetchLatestTopicsSuccess, actions.FetchTrendingTopicsSuccess)).subscribe(data => {
      this.spinnerService.hide();
      this.isLoading = false;
    });
  }

  getSponsorContent(categoryId?:string){
    this.storeSub = this.store.select(state => state.cms.sponsorsList)
      .pipe(takeUntil(this._unsubscribeAll)).subscribe(item => {
        if(item.length){
          this.sponsor = item.filter(o => o.name === this.sponsorName);
          this.store.dispatch(
            new actions.FetchFeaturedTopics({
              ...this.params,
              isFeatured: true,
              sponsorId: this.sponsor[0].id,
              categoryId:this.categoryId?this.categoryId:null,
              limit: 6
            })
          );
          this.store.dispatch(
            new actions.FetchLatestTopics({
              ...this.params,
              isFeatured: false,
              sponsorId: this.sponsor[0].id,
              categoryId: this.categoryId ? this.categoryId : null,
              limit: 6
            })
          );
          this.store.dispatch(
            new actions.FetchTrendingTopics({
              ...this.params,
              limit: 4,
              sponsorId: this.sponsor[0].id,
              categoryId: this.categoryId ? this.categoryId : null,
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
