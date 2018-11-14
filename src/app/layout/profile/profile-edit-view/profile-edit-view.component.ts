import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserProfileData, Experience, ProfileResidency, Education, Address } from '../models/userProfile';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';
import { UpdateUserInfo, UpdateUserAvatar } from '../../../pages/auth/actions/auth.actions';
import { ChangeProfileEditMode } from '../../actions/layout.actions';
import { AvatarCropperComponent } from 'src/app/shared/components/avatar-cropper/avatar-cropper.component';

@Component({
  selector: 'dsod-profile-edit-view',
  templateUrl: './profile-edit-view.component.html',
  styleUrls: ['./profile-edit-view.component.scss']
})
export class ProfileEditViewComponent implements OnInit, AfterViewInit {
  userProfile: UserProfileData = null;
  avatarBaseUrl = `${environment.api}/profile/profileservice/v1/photoDownload?`;
  croppedImage: any;
  croppedImageFile: any;
  fileName: string;
  imageChangedEvent: any;
  specialities: any[] = [];

  constructor(
    private store: Store,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private avatarCropModalService: NgbModal
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
    this.validateUserExp();
    this.validateEducation();
    this.validateResidency();
    this.spinner.show();
    this.store.dispatch(new UpdateUserInfo(this.userProfile)).subscribe(res => {
      this.spinner.hide();
    });
  }

  viewProfile() {
    this.store.dispatch(new ChangeProfileEditMode(false));
  }

  selectFile(file) {
    this.imageChangedEvent = file;
    if (file.srcElement && file.srcElement.files[0]) {
      this.fileName = file.srcElement.files[0].name;
    }
    const modalRef = this.avatarCropModalService.open(
      AvatarCropperComponent,
      {
        centered: true,
        backdrop: 'static'
      }
    );

    modalRef.componentInstance.imageChangedEvent = this.imageChangedEvent;
    modalRef.result
    .then(result => {
      this.croppedImage = result.croppedImage;
      this.croppedImageFile = result.croppedFile;
      this.spinner.show();
      this.store.dispatch(new UpdateUserAvatar(this.croppedImageFile)).subscribe(res => {
        this.spinner.hide();
      });
      // this.authService.uploadUserAvatar(this.croppedImageFile).pipe().subscribe(res => {
      //   this.spinner.hide();
      //   if (res['code'] === 0) {
      //     this.toastr.success('Photo has been uploaded successfully.', 'UserInfo');
      //     this.userProfile.photo_album = {
      //       id: null,
      //       photo: '',
      //       photo_name: res['resultMap']['photoName'],
      //       create_time: null,
      //       email: null,
      //       user_id: null
      //     };
      //     this.saveProfile();
      //   } else {
      //     this.toastr.error('Photo uploading has been failed.', 'UserInfo');
      //   }
      // });
    });
  }

  updateExperience(exp: Experience, expIndex) {
    this.userProfile.experiences[expIndex] = exp;
  }

  deleteExperience(exp: Experience, expIndex) {
    this.userProfile.experiences.splice(expIndex, 1);
  }

  addExperience(exp: Experience) {
    if (exp) {
      this.userProfile.experiences.push(exp);
    } else {
      const lastExp = this.userProfile.experiences[this.userProfile.experiences.length - 1];
      if (!lastExp.practice_name) {
        return;
      }
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
      })
    }
  }

  validateUserExp() {
    this.userProfile.experiences = this.userProfile.experiences.filter(exp => exp.practice_name);
  }

  updateResidency(res: ProfileResidency, resIndex) {
    this.userProfile.profileResidency[resIndex] = res;
  }

  deleteResidency(res: ProfileResidency, resIndex) {
    this.userProfile.profileResidency.splice(resIndex, 1);
  }

  addResidency(res: ProfileResidency) {
    if (res) {
      this.userProfile.profileResidency.push(res);
    } else {
      const lastRes = this.userProfile.profileResidency[this.userProfile.profileResidency.length - 1];
      if (!lastRes.residency_School.id) {
        return;
      }
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
  }

  validateResidency() {
    this.userProfile.profileResidency = this.userProfile.profileResidency.filter(res => res.residency_School.id);
  }

  updateEducation(edu: Education, eduIndex) {
    this.userProfile.educations[eduIndex] = edu;
  }

  deleteEducation(edu: Education, eduIndex) {
    this.userProfile.educations.splice(eduIndex, 1);
  }

  addEducation(edu: Education) {
    if (edu) {
      this.userProfile.educations.push(edu);
    } else {
      const lastEdu = this.userProfile.educations[this.userProfile.educations.length - 1];
      if (!lastEdu.end_time) {
        return;
      }
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
        types: '0'
      });
    }
  }

  validateEducation() {
    this.userProfile.educations = this.userProfile.educations.filter(edu => edu.types);
  }

  updateAddress(address: Address) {
    this.userProfile.practiceAddress = address;
  }
}
