import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CMSContentParams, CMSContentTypeModel } from 'src/app/cms/models';
import { Store } from '@ngxs/store';
import { FetchContentTypes, FetchSponsorsList, ResetState } from 'src/app/cms/actions';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'dsod-dso-practice',
  templateUrl: './dso-practice.component.html',
  styleUrls: ['./dso-practice.component.scss']
})
export class DSODPracticePageComponent implements OnInit, OnDestroy {
  contentTypes$: Observable<CMSContentTypeModel[]>;
  sponsorsList$: Observable<CMSContentTypeModel[]>;
  contentTypesSub: Subscription;
  params: CMSContentParams = {
    skip: 0
  };
  other = [];
  selectedTab = 'All';
  contentTypeId:string;
  contentTypes: CMSContentTypeModel[];
  constructor(private store: Store) {
    store.dispatch(new FetchContentTypes());
    this.contentTypes$ = this.store.select(state => state.cms.contentTypes);
    this.sponsorsList$ = this.store.select(state => state.cms.sponsorsList);
  }
  ngOnInit() {
    this.contentTypeId = null;
    this.contentTypesSub = this.store
      .select(state => state.cms.contentTypes)
      .pipe(skip(1))
      .subscribe(item => {
        this.contentTypes = item;
      });
  }

  filterType(tabName: string) {
    if(tabName=='All'){
      this.contentTypeId=null;
    }
    else{
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
