import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import * as actions from '../../../../cms/actions';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'dsod-sponsor-categories-tabs',
  templateUrl: './sponsor-categories-tab.component.html',
  styleUrls: ['./sponsor-categories-tab.component.scss']
})
export class DSODSponsorCategoriesTabsCompnonent implements OnInit, OnDestroy {
  sponsorName: any;
  selectedCategoryId: string;
  filterTabs$: Observable<any>;
  _unsubscribeAll: Subject<any> = new Subject();
  extractedId: string;
  storeSub: Subscription;
  constructor(private store: Store, private route: ActivatedRoute) {
    this.store.dispatch(new actions.FetchSponsorsList());
    this.route.params.subscribe(param => {
      this.sponsorName = param.name;
      this.fetchSponsorCategories();
    });
  }

  ngOnInit() {
    this.filterTabs$ = this.store.select(
      state => state.cms.sponsoredCategories
    );
  }

  fetchSponsorCategories() {
    this.storeSub = this.store
      .select(state => state.cms.sponsorsList)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(items => {
        if (items.length) {
          const sponsor = items.filter(item => item.name == this.sponsorName);
          console.log("================[ "+JSON.stringify(sponsor) + " ]=======");
          this.extractedId = sponsor[0].id;
          this.store.dispatch(
            new actions.FetchSponsoredCategories(sponsor[0].id)
          );
        }
      });
  }

  onChangeFilter(data: string) {
    this.selectedCategoryId = data;
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
    this.storeSub.unsubscribe();
  }

  getTabNamesForSponsor(sponsorName: string) : string[] {
      let alignTabs: string[] = ["iTero Protocols", "Invisalign Processes", "Practice Building"];
      let gskTabs: string[] = ["Oral Health", "Gingival Care", "Denture Care"];
      let nblTabs: string[] = ["Implant Therapy", "Diagnosis & Treatment Planning", "Site Development", "Implant Practice"];

      if(sponsorName === 'ALN'){
         return alignTabs;
      }

      if(sponsorName === 'GSK'){
         return gskTabs;
      }

      if(sponsorName === 'NBL'){
         return nblTabs;
      }

      return alignTabs;
  }
}
