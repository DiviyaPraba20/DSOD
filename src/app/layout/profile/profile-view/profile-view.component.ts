import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserProfileData, Address } from '../models/userProfile';
import { environment } from 'src/environments/environment';
import { ChangeProfileEditMode } from '../../actions/layout.actions';

@Component({
  selector: 'dsod-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit, AfterViewInit {
  userProfile: UserProfileData = null;
  avatarBaseUrl = `${environment.api}/profile/profileservice/v1/photoDownload?`;
  address: Address = {
    id: null,
    address1: '',
    address2: '',
    city: '',
    zipCode: '',
    states: '',
    email: '',
    user_id: ''
  };

  constructor(
    private store: Store,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.store.select(state => state.auth.userInfo).subscribe(res => {
      this.userProfile = res;
      if (this.userProfile && this.userProfile.practiceAddress) {
        this.address = this.userProfile.practiceAddress;
      }
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  editProfile() {
    this.store.dispatch(new ChangeProfileEditMode(true));
  }
}
