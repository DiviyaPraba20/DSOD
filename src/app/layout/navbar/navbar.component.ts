import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { NavbarService } from './services';
import { Navigation } from './models';

@Component({
  selector: 'dsod-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navigation: Navigation[];
  loggedIn: Observable<boolean>;

  constructor(
    private service: NavbarService,
    private store: Store
  ) { }

  ngOnInit() {
    this.navigation = this.service.getNavItems();
    this.loggedIn = this.store.select(state => state.auth.isLoggedIn);
  }

}
