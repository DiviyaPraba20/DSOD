import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CMSContentParams, CMSContentTypeModel, CMSPageContent } from 'src/app/cms/models';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { FetchContentTypes, FetchSponsorsList, ResetState, FetchSearchResultsSuccess, FetchSponsoredTopics, FetchDSOPracticesSuccess, FetchDSOPractices, FetchSponsorContentsSuccess, FetchCategories } from 'src/app/cms/actions';
import { skip } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dsod-dso-practice',
  templateUrl: './dso-practice.component.html',
  styleUrls: ['./dso-practice.component.scss']
})
export class DSODPracticePageComponent implements OnInit, OnDestroy {
  contentTypes$: Observable<CMSContentTypeModel[]>;
  sponsorsList$: Observable<CMSContentTypeModel[]>;
  DSOPracicesPost$: Observable<CMSPageContent[]>;
  sponsorerTopics$: Observable<CMSContentTypeModel[]>;
  contentTypesSub: Subscription;
  params: CMSContentParams = {
    skip: 0
  };
  other = [];
  selectedTab = 'All';
  contentTypeId: string;
  categoryId:string;
  contentTypes: CMSContentTypeModel[];
  isLoading:boolean=true;
  title:string;
  constructor(private store: Store, private actions$: Actions, private spinnerService: NgxSpinnerService, private route:ActivatedRoute) {
    store.dispatch(new FetchContentTypes());
    store.dispatch(new FetchCategories());
    this.route.params.pipe().subscribe(param=>{
      this.categoryId = param.id
    })
    
  }
  ngOnInit() {
    this.contentTypes$ = this.store.select(state => state.cms.contentTypes);
    this.sponsorsList$ = this.store.select(state => state.cms.sponsorsList);
    this.DSOPracicesPost$ = this.store.select(state => state.cms.DSOPractices);
    this.sponsorerTopics$ = this.store.select(state => state.cms.sponsorsList);
    this.contentTypeId = null;
    this.contentTypesSub = this.store
      .select(state => state.cms.contentTypes)
      .pipe(skip(1))
      .subscribe(item => {
        this.contentTypes = item;
      });

    this.actions$
      .pipe(
        ofActionDispatched(FetchSponsoredTopics, FetchDSOPractices)
      )
      .subscribe(data => {
        this.spinnerService.show();
        this.isLoading=true;
      });  
    this.actions$
      .pipe(ofActionDispatched(FetchSponsorContentsSuccess, FetchDSOPracticesSuccess))
      .subscribe(data => {
        this.spinnerService.hide();
        this.isLoading=false;
      });

    this.store.select(state => state.cms.categories).pipe(skip(1)).subscribe(data=>{
      let categories = data.filter(item => item.id == this.categoryId)
      this.title=categories[0].name
    })
  }

  filterType(tabName: string) {
    if (tabName == 'All') {
      this.contentTypeId = null;
    } else {
      const type = this.contentTypes.filter(item => item.name == tabName);
      this.contentTypeId = type[0].id;
    }
    this.selectedTab = tabName;
  }

  ngOnDestroy() {
    this.contentTypesSub.unsubscribe();
    this.store.dispatch(new ResetState());
  }
}
