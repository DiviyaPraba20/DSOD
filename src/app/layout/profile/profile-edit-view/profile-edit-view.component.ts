import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import { UserProfileData, Experience, ProfileResidency, Education, Address } from '../models/userProfile';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';
import { UpdateUserInfo } from '../../../pages/auth/actions/auth.actions';
import { ChangeProfileEditMode } from '../../actions/layout.actions';

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
    if (this.validateUserProfileInfo()) {
      this.spinner.show();
      this.store.dispatch(new UpdateUserInfo(this.userProfile)).subscribe(res => {
        this.spinner.hide();
        this.store.dispatch(new ChangeProfileEditMode(false));
      });
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
      this.toastr.error(`User name can't be blank`, 'Error');
      return false;
    }
    if (!this.userProfile.email) {
      this.toastr.error(`User email can't be blank`, 'Error');
      return false;
    }
    if (!this.userProfile.specialty.id) {
      this.toastr.error(`Specialty can't be blank`, 'Error');
      return false;
    }
    if (!this.userProfile.practiceAddress) {
      if (!this.userProfile.practiceAddress.address1) {
        this.toastr.error(`User Address1 can't be blank`, 'Error');
        return false;
      }
      if (!this.userProfile.practiceAddress.address2) {
        this.toastr.error(`User Address2 can't be blank`, 'Error');
        return false;
      }
      if (!this.userProfile.practiceAddress.city) {
        this.toastr.error(`City can't be blank`, 'Error');
        return false;
      }
      if (!this.userProfile.practiceAddress.zipCode) {
        this.toastr.error(`Zipcode can't be blank`, 'Error');
        return false;
      }
      if (!this.userProfile.practiceAddress.states) {
        this.toastr.error(`States can't be blank`, 'Error');
        return false;
      }
    }
    if (this.userProfile.experiences.length) {
      const experience = this.userProfile.experiences[0];
      if (!experience.practice_Type.id && !experience.practice_Role.id && !experience.start_time) {
        this.userProfile.experiences = [];
      } else {
        if (!experience.practice_Type.id) {
          this.toastr.error(`Practice Type can't be blank`, 'Error');
          return false;
        }
        if (!experience.practice_Role.id) {
          this.toastr.error(`Practice Role can't be blank`, 'Error');
          return false;
        }
        if (!experience.start_time) {
          this.toastr.error(`Working time can't be blank`, 'Error');
          return false;
        }
      }
    }
    if (this.userProfile.educations.length) {
      const education = this.userProfile.educations[0];
      if (!education.dental_school && !education.school_name && !education.end_time) {
        this.userProfile.educations = [];
      } else {
        if (education.types === '1' && !education.dental_school.id) {
          this.toastr.error(`Dental School field can't be blank`, 'Error');
          return false;
        }
        if (education.types === '0' && !education.school_name) {
          this.toastr.error(`School Name field can't be blank`, 'Error');
          return false;
        }
        if (!education.end_time) {
          this.toastr.error(`Year of Guraduation field can't be blank`, 'Error');
          return false;
        }
      }
    }
    if (this.userProfile.profileResidency.length) {
      const residency = this.userProfile.profileResidency[0];
      if (!residency.residency_School.id && !residency.end_time) {
        this.userProfile.profileResidency = [];
      } else {
        if (!residency.residency_School.id) {
          this.toastr.error(`Residency school field can't be blank`, 'Error');
          return false;
        }
        if (!residency.end_time) {
          this.toastr.error(`Year of Residency Completion field can't be blank`, 'Error');
          return false;
        }
      }
    }
    return true;
  }
}
