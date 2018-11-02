import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import * as actions from '../../cms/actions';
import { Observable } from 'rxjs';
import { CMSResponse, CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn: Observable<boolean>;
  $pageContent: Observable<CMSResponse<CMSPageContent[]>>;
  constructor(private store: Store) {
    store.dispatch(new actions.FetchContentTypes());
    store.dispatch(new actions.FetchSponsorsList());
  }

  ngOnInit() {
    this.loggedIn = this.store.select(state => state.auth.isLoggedIn);
  }
}
