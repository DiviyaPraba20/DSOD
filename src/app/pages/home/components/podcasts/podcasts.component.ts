import { Component, Input, OnInit } from '@angular/core';
import {
  CMSPageContent,
  CMSResponse,
  CMSContentTypeModel,
  CMSContentParams
} from 'src/app/cms/models';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { FetchPodcasts } from 'src/app/cms/actions';

@Component({
  selector: 'dsod-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class DSODPodcastsComponent implements OnInit {
  podcasts$: Observable<CMSResponse<CMSPageContent[]>>;
  constentTypes: CMSContentTypeModel[];
  params: CMSContentParams;

  constructor(private store: Store) {
    store
      .select(state => state.cms.contentTypes)
      .pipe(skip(1))
      .subscribe(item => {
        this.constentTypes = item.filter(data => data.name == 'Podcasts');
        this.params = {
          skip: 0,
          limit: 0,
          isFeatured: true,
          contentTypeId: this.constentTypes[0].id
        };
        this.store.dispatch(new FetchPodcasts(this.params));
      });
  }

  ngOnInit() {
    this.podcasts$ = this.store.select(state => state.cms.podcasts);
  }
}
