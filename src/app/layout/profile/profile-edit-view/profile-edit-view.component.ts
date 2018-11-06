import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserProfileData } from '../models/userProfile';
import { environment } from 'src/environments/environment';
import { ChangeProfileEditMode } from '../../actions/layout.actions';

@Component({
  selector: 'dsod-profile-edit-view',
  templateUrl: './profile-edit-view.component.html',
  styleUrls: ['./profile-edit-view.component.scss']
})
export class ProfileEditViewComponent implements OnInit {
  userProfile: UserProfileData = null;
  avatarBaseUrl = `${environment.api}/profile/profileservice/v1/photoDownload?`;
  croppedImage: any;
  specialities = [{
    id: 0,
    name: 'Dental Public Health'
  }, {
    id: 1,
    name: 'Endodonitics'
  }, {
    id: 2,
    name: 'Orthodonitics'
  }, {
    id: 3,
    name: 'Periodonitics'
  }];

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.store.select(state => state.auth.userInfo).subscribe(res => {
      this.userProfile = res;
    });
  }

  saveProfile() {
    this.store.dispatch(new ChangeProfileEditMode(false));
  }

  selectFile(file) {

  }
}
