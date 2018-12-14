import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import * as actions from '../../../cms/actions';
import { Observable } from 'rxjs';
import { CMSResponse, CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class DSODPreviewComponent implements OnInit {
  pageContent$: Observable<CMSResponse<CMSPageContent>>;

  constructor(private _route: ActivatedRoute, private store: Store) {
    _route.params.subscribe(r => {
      store.dispatch(new actions.FetchPageContent(r.id, true));
    });
  }

  ngOnInit() {
    this.pageContent$ = this.store.select(state => state.cms.pageContent);
  }
}
