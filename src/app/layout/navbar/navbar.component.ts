import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { NavbarService } from './services';
import { Navigation } from './models';
import * as authActions from '../../pages/auth/actions';
import * as layoutActions from '../../layout/actions';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserProfileData } from '../profile/models/userProfile';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'dsod-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userProfile: UserProfileData = null;
  navigation: Navigation[];
  isLoggedIn$ = this.authService.isLoggedIn$;
  avatarBaseUrl = `${environment.api}/profile/profileservice/v1/photoDownload?`;
  isOpen = false;

  constructor(
    private service: NavbarService,
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.navigation = this.service.getNavItems();
    this.store
      .select(state => state.auth.userInfo)
      .subscribe(res => {
        this.userProfile = res;
      });
    this.router.events.subscribe(() => {
      this.isOpen = false;
    });
  }

  toggleProfilePanel() {
    this.store.dispatch(new layoutActions.ChangeProfilePanelStatus());
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.store.dispatch(new authActions.Logout());
  }
}
