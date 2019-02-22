import { Component, Input, OnInit } from '@angular/core';
import { CMSPageContent, CMSContentParams, CMSContentTypeModel } from 'src/app/cms/models';
import { Store } from '@ngxs/store';
import * as actions from '../../../../cms/actions';
import { Observable } from 'rxjs';
import { CMSService } from '../../../../cms/services/cms.service';

@Component({
  selector: 'dsod-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class DSODPodcastsComponent implements OnInit {
  @Input() contentType: CMSContentTypeModel;

  podcasts$: Observable<CMSPageContent[]>;
  indexStart = 0;
  indexEnd = 9;
  activePage = 1;
  params: CMSContentParams = {
    skip: 0,
    limit: 18
  };
  podcastItem: number;
  imageIndex = 0;
  categories: CMSContentTypeModel[] = [];
  selectedType = 'new';

  constructor(
    private store: Store,
    private cmsService: CMSService
  ) {}

  ngOnInit() {
    this.store.dispatch(new actions.FetchPodcasts({
      ...this.params,
      contentTypeId: this.contentType.id
      })
    );
    this.podcasts$ = this.store.select(state => state.cms.podcasts);

    this.cmsService.findAllCategory().subscribe(res => {
      if (res.code === 0) {
        this.categories = res.resultMap.data;
      }
    });
  }

  podcastPagination(e?, page?) {
    this.activePage = page;
    if (page === 1) {
      this.indexStart = 0;
      this.indexEnd = 9;
      this.imageIndex = 0;
    } else {
      this.indexStart = this.indexEnd;
      this.indexEnd += 9;
      this.imageIndex = 9;
    }
  }

  updateAuthors(e) {
    if (this.activePage === 1) {
      this.activePage += 1;
    } else {
      this.activePage -= 1;
    }
    this.podcastPagination(null, this.activePage);
  }

  selectNewType() {
    this.selectedType = 'new';
    this.store.dispatch(new actions.FetchPodcasts({
      ...this.params,
      contentTypeId: this.contentType.id
      })
    );
    this.indexStart = 0;
    this.indexEnd = 9;
    this.activePage = 1;
    this.imageIndex = 0;
  }

  changeCategory(category: CMSContentTypeModel) {
    this.selectedType = 'category';
    this.store.dispatch(new actions.FetchPodcasts({
      ...this.params,
      contentTypeId: this.contentType.id,
      categoryId: category.id
      })
    );
    this.indexStart = 0;
    this.indexEnd = 9;
    this.activePage = 1;
    this.imageIndex = 0;
  }
}
