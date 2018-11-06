import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { NavbarService } from './services';
import { Navigation } from './models';
import * as authActions from '../../pages/auth/actions';
import * as layoutActions from '../../layout/actions';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserProfileData } from '../profile/models/userProfile';
import { environment } from 'src/environments/environment';

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

  constructor(
    private service: NavbarService,
    private store: Store,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.navigation = this.service.getNavItems();
    this.store.select(state => state.auth.userInfo).subscribe(res => {
      this.userProfile = res;
    });
  }

  toggleProfilePanel() {
    this.store.dispatch(new layoutActions.ChangeProfilePanelStatus());
  }

  logout() {
    this.store.dispatch(new authActions.Logout());
  }
}
