import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { skip, tap, takeUntil } from 'rxjs/operators';
import { forkJoin, Subject } from 'rxjs';

import { Store } from '@ngxs/store';
import { TabDirective } from 'ngx-bootstrap/tabs';
import * as actions from '../../../../cms/actions';
import { CMSService } from '../../../../cms/services/cms.service';
import { ActivatedRoute } from '@angular/router';
import {
  CMSPageContent,
  CMSContentTypeModel,
  Sponsor
} from 'src/app/cms/models';

export interface SponsorContentInfo {
  sponsorInfo: Sponsor;
  total: number;
  isLast: boolean;
}

@Component({
  selector: 'dsod-sponsors-container',
  templateUrl: './sponsors-container.component.html',
  styleUrls: ['./sponsors-container.component.scss']
})
export class SponsorsContainerComponent implements OnInit, OnDestroy {
  filterBy = 'All';
  sponsorsList = [];
  sponsorName = '';
  pageConents: CMSPageContent[] = [];
  postType: CMSContentTypeModel;
  sponsorContentsInfo: SponsorContentInfo[] = [];

  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private spinner: NgxSpinnerService,
    private cmsService: CMSService
  ) {
    store.dispatch(new actions.FetchContentTypes());
    store.dispatch(new actions.FetchSponsorsList());
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageConents = [];
      console.log(params.name, this.pageConents);
      this.sponsorName = params.name;
      this.getSponsorId();
      this.getPostType();
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new actions.ResetState());
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  onChangeFilter(data: TabDirective): void {
    this.filterBy = data.heading;
    this.pageConents = [];
    this.getPostType();
    this.searchAllSponsorPostContents();
  }

  getPostType() {
    this.sponsorContentsInfo.map(item => {
      item.total = 0;
    });
    this.store.select(state => state.cms.contentTypes).pipe(takeUntil(this._unsubscribeAll))
    .subscribe(item => {
      this.postType = item.filter(type => type.name === this.filterBy)[0];
    });
  }

  getSponsorId() {
    this.store.select(state => state.cms.sponsorsList).pipe(takeUntil(this._unsubscribeAll))
    .subscribe((sponsors: Sponsor[]) => {
      this.sponsorContentsInfo = [];
      sponsors.map(sponsor => {
        if (this.sponsorName) {
          if (sponsor.name === this.sponsorName) {
            this.sponsorContentsInfo.push({
              sponsorInfo: sponsor,
              total: 0,
              isLast: false
            });
          }
        } else {
          if (sponsor.name !== 'TNMG') {
            this.sponsorContentsInfo.push({
              sponsorInfo: sponsor,
              total: 0,
              isLast: false
            });
          }
        }
      });
      this.searchAllSponsorPostContents();
    });
  }

  async searchAllSponsorPostContents() {
    let contentTypeId = null;
    if (this.postType && this.postType.id) {
      contentTypeId = this.postType.id;
    }
    try {
      this.spinner.show();
      await forkJoin(this.sponsorContentsInfo.map((item: SponsorContentInfo) => {
        return this.cmsService.findAllContents({
          skip: item.total,
          limit: 5,
          contentTypeId: contentTypeId,
          sponsorId: item.sponsorInfo.id
        }).pipe(
          tap(res => {
            if (res.code === 0) {
              item.total += res.resultMap.data.length;
              this.pageConents = this.pageConents.concat(res.resultMap.data);
            }
          })
        );
      })).toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.spinner.hide();
    }
  }

  onScroll() {
    this.searchAllSponsorPostContents();
  }
}
