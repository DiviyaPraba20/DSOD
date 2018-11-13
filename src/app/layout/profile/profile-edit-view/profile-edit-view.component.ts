import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import { UserProfileData, Experience, ProfileResidency, Education, Address } from '../models/userProfile';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';
import { UpdateUserInfo } from '../../../pages/auth/actions/auth.actions';
import { ChangeProfileEditMode } from '../../actions/layout.actions';
import { ProfileExperienceComponent } from '../profile-experience/profile-experience.component';
import { ProfileEducationComponent } from '../profile-education/profile-education.component';
import { ProfileResidencyComponent } from '../profile-residency/profile-residency.component';
import { ProfileAddressComponent } from '../profile-address/profile-address.component';

@Component({
  selector: 'dsod-profile-edit-view',
  templateUrl: './profile-edit-view.component.html',
  styleUrls: ['./profile-edit-view.component.scss']
})
export class ProfileEditViewComponent implements OnInit, AfterViewInit {
  userProfile: UserProfileData = null;
  avatarBaseUrl = `${environment.api}/profile/profileservice/v1/photoDownload?`;
  croppedImage: any;
  isAddNewExperience = false;
  isAddNewResidency = false;
  isAddNewEducation = false;
  isAddNewAddress = false;
  specialities: any[] = [];

  @ViewChild(ProfileExperienceComponent) expComponentRef: ProfileExperienceComponent;
  @ViewChild(ProfileEducationComponent) eduComponentRef: ProfileEducationComponent;
  @ViewChild(ProfileResidencyComponent) resComponentRef: ProfileResidencyComponent;
  @ViewChild(ProfileAddressComponent) addComponentRef: ProfileAddressComponent;

  constructor(
    private store: Store,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.store.select(state => state.auth.userInfo).subscribe(res => {
      this.userProfile = res;
      this.initUserProfileData();
    });

    this.authService.getAllSpeciality().pipe().subscribe(res => {
      this.specialities = res.resultMap.data;
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  initUserProfileData() {
    if (!this.userProfile.specialty) {
      this.userProfile.specialty = {
        id: null,
        name: '',
        description: ''
      };
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

  saveProfile() {
    if (this.expComponentRef.expandExperienceSection(false)
      && this.eduComponentRef.expandEducationSection(false)
      && this.resComponentRef.expandResidencySection(false)
      && this.addComponentRef.expandAddressSection(false)) {
      if (this.validateUserProfileInfo()) {
        this.spinner.show();
        console.log(this.userProfile);
        this.store.dispatch(new UpdateUserInfo(this.userProfile)).subscribe(res => {
          this.spinner.hide();
        });
      }
    }
  }

  viewProfile() {
    this.store.dispatch(new ChangeProfileEditMode(false));
  }

  selectFile(file) { }

  updateExperience(exp: Experience) {
    const index = this.userProfile.experiences.findIndex(x => x.id === exp.id);
    if (index !== -1) {
      this.userProfile.experiences[index] = exp;
    } else {
      this.userProfile.experiences.push(exp);
    }
  }

  updateResidency(res: ProfileResidency) {
    const index = this.userProfile.profileResidency.findIndex(x => x.id === res.id);
    if (index !== -1) {
      this.userProfile.profileResidency[index] = res;
    } else {
      this.userProfile.profileResidency.push(res);
    }
  }

  updateEducation(edu: Education) {
    const index = this.userProfile.educations.findIndex(x => x.id === edu.id);
    if (index !== -1) {
      this.userProfile.educations[index] = edu;
    } else {
      this.userProfile.educations.push(edu);
    }
  }

  updateAddress(address: Address) {
    this.userProfile.practiceAddress = address;
  }

  validateUserProfileInfo() {
    if (!this.userProfile.full_name) {
      this.toastr.warning(`User name can't be blank`, 'Error');
      return false;
    }
    if (!this.userProfile.email) {
      this.toastr.warning(`User email can't be blank`, 'Error');
      return false;
    }
    if (!this.userProfile.specialty.id) {
      this.toastr.warning(`Specialty can't be blank`, 'Error');
      return false;
    }
    if (this.userProfile.practiceAddress) {
      const add = this.userProfile.practiceAddress;
      if (!add.address1 && !add.address2 && !add.city && !add.zipCode && !add.states) {
        this.userProfile.practiceAddress = null;
      }
    }
    if (this.userProfile.experiences.length) {
      const experience = this.userProfile.experiences[0];
      if (!experience.practice_Type.id && !experience.practice_Role.id && !experience.start_time) {
        this.userProfile.experiences = [];
      }
    }
    if (this.userProfile.educations.length) {
      const education = this.userProfile.educations[0];
      if (!education.dental_school.id && !education.school_name && !education.end_time) {
        this.userProfile.educations = [];
      }
    }
    if (this.userProfile.profileResidency.length) {
      const residency = this.userProfile.profileResidency[0];
      if (!residency.residency_School.id && !residency.end_time) {
        this.userProfile.profileResidency = [];
      }
    }
    return true;
  }
}
