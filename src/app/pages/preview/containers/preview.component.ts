import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import * as actions from '../../../cms/actions';
import { Observable } from 'rxjs';
import { CMSResponse, CMSPageContent } from 'src/app/cms/models';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'dsod-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class DSODPreviewComponent implements OnInit {
  isLoading: boolean;
  pageContent$: Observable<CMSResponse<CMSPageContent>>;

  constructor(private _route: ActivatedRoute, private store: Store, private actions$: Actions,
    private spinnerService: NgxSpinnerService) {
    _route.params.subscribe(r => {
      store.dispatch(new actions.FetchPageContent(r.id, true));
    });
  }

  ngOnInit() {
    this.spinnerService.show();
    this.isLoading = true;
    this.pageContent$ = this.store.select(state => state.cms.pageContent);
    this.actions$
      .pipe(ofActionDispatched(actions.FetchPageContentSuccess))
      .subscribe(data => {
        this.spinnerService.hide();
        this.isLoading = false;
      });
  }
}
