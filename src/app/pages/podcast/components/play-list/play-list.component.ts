import { Component, Input, OnInit } from '@angular/core';
import {
  CMSPageContent,
  CMSContentParams,
  CMSContentTypeModel
} from 'src/app/cms/models';
import { Store } from '@ngxs/store';
import * as actions from '../../../../cms/actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'dsod-podcast-playlist',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class DSODPodcastPlayListComponent implements OnInit {
  @Input() contenTypeId: string;
  params: CMSContentParams = {
    skip: 0,
    limit: 9
  };
  podcasts$: Observable<CMSPageContent[]>;
  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(
      new actions.FetchPodcasts({
        ...this.params,
        contentTypeId: this.contenTypeId
      })
    );
    this.podcasts$ = this.store.select(state => state.cms.podcasts);
  }

  navigateTo(podcast) {
    this.router.navigate(['./podcast', podcast.id]);
  }
}
