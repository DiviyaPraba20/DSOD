import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { JwtHelperService } from '@auth0/angular-jwt';

import { GetUserInfo } from '../../../pages/auth/actions/auth.actions';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'dsod-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss']
})
export class ProfilePanelComponent implements OnInit {
  isEditMode$: Observable<boolean>;
  profilePanel$: Observable<boolean>;
  jwtHelper = new JwtHelperService();
  isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(
    private store: Store,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.profilePanel$ = this.store.select(state => state.layout.isOpenedProfilePanel);
    this.isEditMode$ = this.store.select(state => state.layout.isEditProfile);
    // this.isLoggedIn$.subscribe(res => {
    //   if (res) {
    //     const userInfo = this.authService.getUserInfoFromToken();
    //     this.store.dispatch(new GetUserInfo({
    //       email: userInfo.user_name
    //     }));
    //   }
    // });
  }
}
