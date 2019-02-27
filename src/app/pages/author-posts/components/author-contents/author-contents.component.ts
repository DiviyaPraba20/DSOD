import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import * as actions from '../../../../cms/actions';
import {CMSContentTypeModel } from 'src/app/cms/models';
import { skip } from 'rxjs/operators';
import { TabDirective } from 'ngx-bootstrap';
import { FetchContents, FetchContentsSuccess } from '../../../../cms/actions';
import { NgxSpinnerService } from 'ngx-spinner';
import { debug } from 'util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dsod-author-contents',
  templateUrl: './author-contents.component.html',
  styleUrls: ['./author-contents.component.scss']
})
export class DSODAuthorContentComponent implements OnInit {
  contentTypes: CMSContentTypeModel[];
  contentTypeId: string;
  isLoading: boolean;
  filterType = 'All';
  authorId:any;
  constructor(
    private store: Store,
    private actions$: Actions,
    private spinnerService: NgxSpinnerService,
    private route:ActivatedRoute
  ) {
    this.store.dispatch(new actions.FetchContentTypes());
    route.params.subscribe(param=>{
      this.authorId=param.id
    })
  }
  ngOnInit() {
    this.store
      .select(state => state.cms.contentTypes)
      .pipe(skip(1))
      .subscribe(types => {
        this.contentTypes = types;
      });

    this.actions$.pipe(ofActionDispatched(FetchContents)).subscribe(data => {
      this.spinnerService.show();
    });
    this.actions$
      .pipe(ofActionDispatched(FetchContentsSuccess))
      .subscribe(data => {
        this.spinnerService.hide();
      });
  }

  onChangeFilter(data: TabDirective) {
    this.filterType = data.heading;
    let type = this.contentTypes.filter(type => type.name == data.heading);
    if (type.length) {
      this.contentTypeId = type[0].id;
    } else {
      this.contentTypeId = null;
    }
  }
}
