import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { Store } from '@ngxs/store';
import { TabDirective } from 'ngx-bootstrap/tabs';
import * as actions from '../../../cms/actions';
import {
  CMSResponse,
  CMSPageContent,
  CMSContentTypeModel,
  Sponsors
} from 'src/app/cms/models';
import { FetchSponsorContents } from '../../../cms/actions';

@Component({
  selector: 'dsod-sponsors-container',
  templateUrl: './sponsors-container.component.html',
  styleUrls: ['./sponsors-container.component.scss']
})
export class SponsorsContainerComponent implements OnInit, OnDestroy {
  filterBy = 'All';
  sponsorName = '';
  skip = 0;
  sponsorsList = [];
  pageConents: CMSPageContent[] = [];
  postType: CMSContentTypeModel;
  sponsorInfo: Sponsors = {
    id: null,
    name: null
  };

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private spinner: NgxSpinnerService
  ) {
    store.dispatch(new actions.FetchContentTypes());
    store.dispatch(new actions.FetchSponsorsList());
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.sponsorName = params.name;
      this.getSponsorId();
      this.getPostType();
      this.getPostContents();
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new actions.ResetState());
  }

  onChangeFilter(data: TabDirective): void {
    this.filterBy = data.heading;
    this.skip = 0;
    this.getPostType();
    this.searchPostContents();
  }

  getPostType() {
    this.store.select(state => state.cms.contentTypes).pipe().subscribe(item => {
      this.postType = item.filter(type => type.name === this.filterBy)[0];
    });
  }

  getSponsorId() {
    this.store.select(state => state.cms.sponsorsList).pipe().subscribe(sponsors => {
      this.sponsorInfo = sponsors.filter(sponsor => sponsor.name === this.sponsorName)[0];
      this.searchPostContents();
    });
  }

  searchPostContents() {
    let contentTypeId = null;
    let sponsorId = null;
    if (this.sponsorInfo && this.sponsorInfo.id) {
      sponsorId = this.sponsorInfo.id;
    }
    if (this.postType && this.postType.id) {
      contentTypeId = this.postType.id;
    }
    this.spinner.show();
    this.store.dispatch(new FetchSponsorContents({
      skip: this.skip,
      limit: 10,
      contentTypeId: contentTypeId,
      sponsorId: sponsorId
    })).subscribe(res => {
      this.spinner.hide();
    });
  }

  getPostContents() {
    this.store.select(state => state.cms.sponsoredTopics).subscribe(res => {
      this.pageConents = res;
      this.skip += 10;
    });
  }

  onScroll() {
    console.log('hahahaha');
    this.searchPostContents();
  }
}
