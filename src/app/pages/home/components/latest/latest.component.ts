import { Component, OnInit, Input } from '@angular/core';
import {
  CMSPageContent,
  CMSResponse,
  CMSContentTypeModel,
  CMSContentParams
} from 'src/app/cms/models';
import { Store } from '@ngxs/store';
import { skip } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FetchLatestTopics } from 'src/app/cms/actions';

@Component({
  selector: 'dsod-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class DSODLatestComponent implements OnInit {
  latestTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  contentType: CMSContentTypeModel;
  params: CMSContentParams;

  constructor(private store: Store) {
    store
      .select(state => state.cms.contentTypes)
      .pipe(skip(1))
      .subscribe(item => {
        this.contentType = item.filter(data => data.name == 'Articles');
        this.params = {
          skip: 0,
          limit: 0,
          isFeatured: true,
          contentTypeId: this.contentType[0].id
        };
        this.store.dispatch(new FetchLatestTopics(this.params));
      });
  }

  ngOnInit() {
    this.latestTopics$ = this.store.select(state => state.cms.latestTopics);
  }
}
