import { Component, OnInit, Input } from '@angular/core';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CMSPageContent, CMSContentParams } from 'src/app/cms/models';
import { skip } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as actions from 'src/app/cms/actions';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'dsod-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class DSODSearchResults implements OnInit {
  @Input() searchTerm: string;
  searchResults: CMSPageContent;
  currentPage = 1;
  params: CMSContentParams;
  noRecord = false;
  constructor(
    private store: Store,
    private router: Router,
    private actions$: Actions,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinnerService.show();
    this.store
      .select(state => state.cms.searchResults)
      .pipe(skip(1))
      .subscribe(data => {
        this.spinnerService.hide();
        this.noRecord = false;
        this.searchResults = data;
      });
    this.actions$
      .pipe(ofActionDispatched(actions.FetchSearchResultsSuccess))
      .subscribe(data => {
        if (data.payload.length == 0) {
          this.noRecord = true;
        }
      });
  }

  getPage() {
    this.noRecord = false;
    if (this.currentPage == 1) {
      this.params = {
        skip: 0,
        limit: 6,
        searchValue: this.searchTerm
      };
    } else {
      this.params = {
        skip: this.currentPage * 6,
        limit: 6,
        searchValue: this.searchTerm
      };
    }
    this.store.dispatch(new actions.FetchSearchResults(this.params));
  }
}
