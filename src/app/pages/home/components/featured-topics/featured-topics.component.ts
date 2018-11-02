import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  CMSPageContent,
  CMSContentTypeModel,
  CMSResponse,
  CMSContentParams
} from 'src/app/cms/models';
import { Store } from '@ngxs/store';
import { FetchFeaturedTopics } from 'src/app/cms/actions';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'dsod-featured-topics',
  templateUrl: './featured-topics.component.html',
  styleUrls: ['./featured-topics.component.scss']
})
export class DSODFeaturedTopicsComponent implements OnInit {
  @Input()
  pageContents: CMSPageContent[];
  featuredTopics$: Observable<CMSResponse<CMSPageContent[]>>;
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
          isFeatured: true
        };
        this.store.dispatch(new FetchFeaturedTopics(this.params));
      });
  }

  ngOnInit() {
    this.featuredTopics$ = this.store.select(state => state.cms.featuredTopics);
  }
}
