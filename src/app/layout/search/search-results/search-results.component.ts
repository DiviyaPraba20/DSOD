import { Component, OnInit, Input } from '@angular/core';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  CMSPageContent,
  CMSContentParams,
  CMSResponse
} from 'src/app/cms/models';
import { skip, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as actions from 'src/app/cms/actions';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'dsod-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class DSODSearchResults implements OnInit {
  @Input() searchTerm: Observable<any>;
  searchResponse$: Observable<CMSResponse<CMSPageContent>>;
  searchValue: string;
  currentPage = 1;
  params: CMSContentParams;
  isLoading: boolean;
  totalFound: number;
  constructor(
    private store: Store,
    private router: Router,
    private actions$: Actions,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.searchTerm.pipe(debounceTime(400)).subscribe(val => {
      this.isLoading = true;
      this.spinnerService.show();
      this.searchValue = val;
      this.store.dispatch(
        new actions.FetchSearchResults({
          skip: 0,
          limit: 6,
          searchValue: val
        })
      );
    });
    this.searchResponse$ = this.store.select(state => state.cms.searchResults);
    this.actions$
      .pipe(ofActionDispatched(actions.FetchSearchResultsSuccess))
      .subscribe(data => {
        this.spinnerService.hide();
        this.isLoading = false;
      });
  }

  loadPage(e) {
    this.isLoading = true;
    this.spinnerService.show();
    this.params = {
      skip: (this.currentPage - 1) * 6,
      limit: 6,
      searchValue: this.searchValue
    };
    this.store.dispatch(new actions.FetchSearchResults(this.params));
  }
}
