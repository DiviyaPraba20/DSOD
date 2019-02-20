import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import * as actions from '../../../../cms/actions';
import { ActivatedRoute } from '@angular/router';
import {
  CMSContentParams,
  CMSResponse,
  CMSPageContent
} from 'src/app/cms/models';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/pages/auth/states/auth.state';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dsod-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class DSODArticelComponent implements OnInit {
  avgRating: any;
  trendingTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  params: CMSContentParams = {
    skip: 0
  };
  pageContent$: Observable<CMSPageContent>;
  isLoggedIn: boolean;
  selectedCarouselImage = null;

  constructor(private _route: ActivatedRoute, private store: Store) {
    this.isLoggedIn = store.selectSnapshot(AuthState.isLoggedIn);
    _route.params.subscribe(r => {
      store.dispatch(
        new actions.FetchTrendingTopics({ ...this.params, limit: 3 })
      );
      store.dispatch(new actions.FetchPageContent(r.id));
    });
  }

  ngOnInit() {
    this.trendingTopics$ = this.store.select(state => state.cms.trendingTopics);
    this.pageContent$ = this.store.select(state => state.cms.pageContent);
  }

  updateRating(e) {
    this.avgRating = e;
  }

  onChangeImage(carouselImage) {
    console.log('imageIndex = ', carouselImage);
    this.selectedCarouselImage = carouselImage;
  }

  getUrl(id) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
