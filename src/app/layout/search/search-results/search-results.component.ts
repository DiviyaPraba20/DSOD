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
  isLoading: boolean;
  constructor(
    private store: Store,
    private router: Router,
    private actions$: Actions,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.store.dispatch(
      new actions.FetchSearchResults({
        skip: 0,
        limit: 6,
        searchValue: this.searchTerm
      })
    );
    this.spinnerService.show();
    this.store
      .select(state => state.cms.searchResults)
      .pipe(skip(1))
      .subscribe(data => {
        this.noRecord = false;
        this.searchResults = data;
      });
    this.actions$
      .pipe(ofActionDispatched(actions.FetchSearchResultsSuccess))
      .subscribe(data => {
        this.spinnerService.hide();
        this.isLoading = false;
        if (data.payload.length === 0) {
          this.noRecord = true;
        }
      });
  }

  getPage() {
    this.isLoading = true;
    this.spinnerService.show();
    this.noRecord = false;
    this.params = {
      skip: (this.currentPage - 1) * 6,
      limit: 6,
      searchValue: this.searchTerm
    };
    this.store.dispatch(new actions.FetchSearchResults(this.params));
  }
}
