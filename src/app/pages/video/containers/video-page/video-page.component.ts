import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of, Subject } from 'rxjs';
import { switchMap, tap, takeUntil, map } from 'rxjs/operators';

import * as actions from '../../../../cms/actions';
import { CMSContentParams, CMSResponse, CMSPageContent } from 'src/app/cms/models';
import { AuthState } from 'src/app/pages/auth/states/auth.state';
import { CMSService } from '../../../../cms/services/cms.service';

@Component({
  selector: 'd',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class DSODVideoPageComponent implements OnInit {
  avgRating: any;
  trendingTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  params: CMSContentParams = { skip: 0 };
  pageContent: CMSPageContent;
  isLoggedIn: boolean;

  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private cmsService: CMSService
  ) {
    this.isLoggedIn = store.selectSnapshot(AuthState.isLoggedIn);
    this.route.params.subscribe(r => {
      this.store.dispatch(new actions.FetchTrendingTopics({ ...this.params, limit: 3 }));
      this.store.dispatch(new actions.FetchPageContent(r.id));
    });
  }
  ngOnInit() {
    this.trendingTopics$ = this.store.select(state => state.cms.trendingTopics);
    // this.pageContent$ = this.store.select(state => state.cms.pageContent);
    this.store.select(state => state.cms.pageContent).pipe(
      takeUntil(this._unsubscribeAll),
      switchMap((item: CMSPageContent) => {
        if (item && item.visualEssayIds && item.visualEssayIds.length > 0) {
          return this.cmsService.getVisualEssay(item.visualEssayIds[0]).pipe(
            map((res: any) => {
              if (res.code === 0) {
                return {...item, visualEssays: [res.resultMap.data]};
              } else {
                return item;
              }
            })
          );
        } else {
          return of(item);
        }
      }),
      tap(res => {
        this.pageContent = res;
      })
    ).subscribe();
  }

  updateRating(e) {
    this.avgRating = e;
  }
}
