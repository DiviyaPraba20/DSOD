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
  isAddNewAddress = false;
  specialities: any[] = [];

  constructor(
    private store: Store,
    private authService: AuthService
  ) {
    // this.userProfileForm = this.fb.group({
    //   full_name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   phone: [''],
    //   practiceAddress: this.fb.group({
    //     address1: [''],
    //     address2: [''],
    //     zipCode: [''],
    //     city: [''],
    //     state: ['']
    //   }),
    //   resume_url: [''],
    //   experiences: this.fb.array([
    //     this.fb.group({
    //       id: [''],
    //       practiceType: [''],
    //       practiceName: [''],
    //       practiceRole: [''],
    //       practiceDSO: [''],
    //       createTime: [''],
    //       startTime: [''],
    //       endTime: ['']
    //     })
    //   ]),
    //   residency: this.fb.array([
    //     this.fb.group({
    //       id: [''],
    //       residencySchool: [''],
    //       createTime: [''],
    //       startTime: [''],
    //       endTime: ['']
    //     })
    //   ]),
    //   education: this.fb.array([
    //     this.fb.group({
    //       id: [''],
    //       dentalSchool: [''],
    //       createTime: [''],
    //       startTime: [''],
    //       endTime: ['']
    //     })
    //   ]),
    //   residencyId: [''],
    //   dentalSchoolId: [''],
    //   photo_url: [''],
    //   specialityId: [''],
    //   documentLib: this.fb.group({
    //     id: [''],
    //     document: [''],
    //     documentName: [''],
    //     createTime: ['']
    //   })
    // });
  }

  ngOnInit() {
    this.store.select(state => state.auth.userInfo).subscribe(res => {
      this.userProfile = res;
      console.log(this.userProfile);
      this.initUserProfileData();
    });

    this.authService.getAllSpeciality().pipe().subscribe(res => {
      this.specialities = res.resultMap.data;
    });
  }

  initUserProfileData() {
    if (!this.userProfile.specialty) {
      this.userProfile.specialty = {
        id: null,
        name: '',
        description: ''
      };
    }
    if (!this.userProfile.experiences.length) {
      this.userProfile.experiences.push({
        id: null,
        practice_Type: {
          id: null,
          name: ''
        },
        practice_name: '',
        practice_Role: {
          id: null,
          name: ''
        },
        practice_DSO: {
          id: null,
          name: ''
        },
        create_time: null,
        start_time: null,
        end_time: null,
        email: ''
      });
    }
    if (!this.userProfile.profileResidency.length) {
      this.userProfile.profileResidency.push({
        id: null,
        residency_School: {
          id: null,
          name: ''
        },
        create_time: null,
        start_time: null,
        end_time: null,
        email: '',
        user_id: ''
      });
    }
    if (!this.userProfile.educations.length) {
      this.userProfile.educations.push({
        id: null,
        dental_school: {
          id: null,
          name: ''
        },
        school_name: '',
        major: '',
        create_time: null,
        start_time: null,
        end_time: null,
        email: '',
        types: ''
      });
    }
    if (!this.userProfile.practiceAddress) {
      this.userProfile.practiceAddress = {
        id: null,
        address1: '',
        address2: '',
        city: '',
        zipCode: '',
        states: '',
        email: '',
        user_id: ''
      };
    }
  }

  onCheck() {
    console.log(this.userProfile);
  }

  saveProfile() {
    this.store.dispatch(new ChangeProfileEditMode(false));
  }

  selectFile(file) {

  }
}
