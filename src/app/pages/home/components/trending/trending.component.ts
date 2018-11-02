import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  CMSResponse,
  CMSPageContent,
  CMSContentTypeModel
} from 'src/app/cms/models';
import { skip } from 'rxjs/operators';
import { FetchTrendingTopics } from 'src/app/cms/actions';

@Component({
  selector: 'dsod-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class DSODTrendingComponent implements OnInit {
  trendingTopics$: Observable<CMSResponse<CMSPageContent>>;
  contentType: CMSContentTypeModel;
  constructor(private store: Store) {
    store
      .select(state => state.cms.contentTypes)
      .pipe(skip(1))
      .subscribe(item => {
        this.contentType = item.filter(data => data.name == 'Videos');
        let options = {
          skip: 0,
          limit: 0,
          isFeatured: true,
          contentTypeId: this.contentType[0].id
        };
        this.store.dispatch(new FetchTrendingTopics(options));
      });
  }

  ngOnInit() {
    this.trendingTopics$ = this.store.select(state => state.cms.trendingTopics);
  }
}
