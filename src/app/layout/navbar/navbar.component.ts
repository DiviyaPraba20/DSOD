import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { NavbarService } from './services';
import { Navigation } from './models';
import * as authActions from '../../pages/auth/actions';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'dsod-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navigation: Navigation[];
  isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(
    private service: NavbarService,
    private store: Store,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.navigation = this.service.getNavItems();
  }

  toggleProfilePanel() {
    this.store.dispatch(new authActions.ToggleProfilePanel());
  }

  logout() {
    this.store.dispatch(new authActions.Logout());
  }
}
