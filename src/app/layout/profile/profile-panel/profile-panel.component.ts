import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { JwtHelperService } from '@auth0/angular-jwt';

import { GetUserInfo } from '../../../pages/auth/actions/auth.actions';
import { AuthService } from '../../../core/services/auth.service';
import { AuthState } from '../../../pages/auth/states/auth.state';

@Component({
  selector: 'dsod-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss']
})
export class ProfilePanelComponent implements OnInit {
  isEditMode = false;
  isLoggedIn = false;
  profilePanel: Observable<boolean>;
  jwtHelper = new JwtHelperService();

  constructor(
    private store: Store,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.profilePanel = this.store.select(state => state.auth.isOpenedProfilePanel);

    this.store.select(state => state.auth.isLoggedIn).subscribe(res => {
      this.isLoggedIn = res;

      if (this.isLoggedIn) {
        const accessToken: string = this.store.selectSnapshot<string>(AuthState.accessToken);
        const userInfo = this.authService.getUserInfoFromToken(accessToken);
        this.store.dispatch(new GetUserInfo({
          email: userInfo.user_name
        }));
      }
    });
  }
}
