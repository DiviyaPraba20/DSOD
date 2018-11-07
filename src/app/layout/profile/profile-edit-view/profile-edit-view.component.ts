import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserProfileData } from '../models/userProfile';
import { environment } from 'src/environments/environment';
import { ChangeProfileEditMode } from '../../actions/layout.actions';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'dsod-profile-edit-view',
  templateUrl: './profile-edit-view.component.html',
  styleUrls: ['./profile-edit-view.component.scss']
})
export class ProfileEditViewComponent implements OnInit {
  userProfile: UserProfileData = null;
  avatarBaseUrl = `${environment.api}/profile/profileservice/v1/photoDownload?`;
  croppedImage: any;
  isAddNewExperience = false;
  isAddNewResidency = false;
  isAddNewEducation = false;
  specialities: any[] = [];

  constructor(
    private store: Store,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.store.select(state => state.auth.userInfo).subscribe(res => {
      this.userProfile = res;
    });

    this.authService.getAllSpeciality().pipe().subscribe(res => {
      this.specialities = res.resultMap.data;
    });
  }

  saveProfile() {
    this.store.dispatch(new ChangeProfileEditMode(false));
  }

  selectFile(file) {

  }
}
