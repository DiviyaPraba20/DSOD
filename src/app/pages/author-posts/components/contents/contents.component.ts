import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import * as actions from '../../../../cms/actions';
import { CMSContentParams } from 'src/app/cms/models';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dsod-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class DSODContentsComponent implements OnInit {
  authorId: any;
  skip = 0;
  @Input() contentTypeId: string;
  posts$: Observable<any>;
  params: CMSContentParams;
  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {
    this.route.params.pipe().subscribe(param => {
      this.authorId = param.id;
    });
  }

  ngOnInit() {
    this.params = {
      skip: 0,
      limit: 10,
      authorId: this.authorId,
      contentTypeId: this.contentTypeId
    };
    this.loadContents(this.params);
    this.posts$ = this.store.select(state => state.cms.contents);
  }

  loadContents(params) {
    this.store.dispatch(new actions.FetchContents(params));
  }

  onLoadMore() {
    this.skip += 10;
    const param: CMSContentParams = {
      ...this.params,
      skip: this.skip,
      limit: 10
    };
    this.loadContents(param);
  }

  navigateTo(e) {
    if (e.contentTypeName === 'Videos') {
      this.router.navigate(['./video', e.id]);
    } else if (e.contentTypeName === 'Podcasts') {
      this.router.navigate(['./podcast', e.id]);
    } else if (e.contentTypeName === 'Visual Essay') {
      this.router.navigate(['./visual-essay', e.id]);
    } else {
      this.router.navigate(['./article', e.id]);
    }
  }

  ngOnDestroy() {
    this.store.dispatch(new actions.ResetState());
  }
}
