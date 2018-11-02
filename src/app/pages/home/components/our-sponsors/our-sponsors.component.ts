import { Component, OnInit, Input } from '@angular/core';
import {
  CMSPageContent,
  CMSContentTypeModel,
  CMSResponse,
  CMSContentParams
} from 'src/app/cms/models';
import { Store } from '@ngxs/store';
import { skip } from 'rxjs/operators';
import { FetchSponsoredTopics } from 'src/app/cms/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'dsod-our-sponsors',
  templateUrl: './our-sponsors.component.html',
  styleUrls: ['./our-sponsors.component.scss']
})
export class DSODOurSponsorsComponent implements OnInit {
  @Input()
  pageContents: CMSPageContent[];
  sponsoredTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  contentTypes: CMSContentTypeModel;
  params: CMSContentParams;
  constructor(private store: Store) {
    store
      .select(state => state.cms.sponsorsList)
      .pipe(skip(1))
      .subscribe(item => {
        this.contentTypes = item.filter(data => data.name == 'Articles');
        this.params = { skip: 0, limit: 7, isFeatured: true };
        this.store.dispatch(new FetchSponsoredTopics(this.params));
      });
  }

  ngOnInit() {
    this.sponsoredTopics$ = this.store.select(
      state => state.cms.sponsoredTopics
    );
  }
}
