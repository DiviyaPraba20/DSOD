import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import * as actions from '../../../../cms/actions';
import { ActivatedRoute } from '@angular/router';
import { CMSContentParams, CMSResponse, CMSPageContent } from 'src/app/cms/models';
import { CMSService } from '../../../../cms/services/cms.service';
import { Observable, of, Subject } from 'rxjs';
import { switchMap, tap, takeUntil, map } from 'rxjs/operators';
import { AuthState } from 'src/app/pages/auth/states/auth.state';

@Component({
  selector: 'dsod-visual-essay',
  templateUrl: './visual-essay.component.html',
  styleUrls: ['./visual-essay.component.scss']
})
export class VisualEssayComponent implements OnInit {
  avgRating: any;
  trendingTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  params: CMSContentParams = { skip: 0 };
  isLoggedIn: boolean;

  pageContent: CMSPageContent;

  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private cmsService: CMSService
  ) {
    this.isLoggedIn = store.selectSnapshot(AuthState.isLoggedIn);
    this.route.params.subscribe(r => {
      store.dispatch(new actions.FetchTrendingTopics({ ...this.params, limit: 3 }));
      store.dispatch(new actions.FetchPageContent(r.id));
    });
  }

  ngOnInit() {
    this.trendingTopics$ = this.store.select(state => state.cms.trendingTopics);
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

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  updateRating(e) {
    this.avgRating = e;
  }
}
