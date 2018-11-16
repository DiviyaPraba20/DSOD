import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserProfileData, Experience, ProfileResidency, Education, Address } from '../models/userProfile';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';
import { UpdateUserInfo, UpdateUserAvatar, RemoveResume } from '../../../pages/auth/actions/auth.actions';
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
  resumeFile: any;
  isResumeUploading: boolean;
  isResumePreview: boolean;
  resumePreviewUrl: string;
  RESUME_FILE = 1;
  PHOTO_FILE = 2;
  typeFile: number;
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
      if (this.userProfile.document_library) {
        this.resumeFile = {};
        this.resumeFile.name = this.userProfile.document_library.document_name || '';
      }
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
    this.validateAddress();
    this.spinner.show();
    this.store.dispatch(new UpdateUserInfo(this.userProfile)).subscribe(res => {
      this.spinner.hide();
    });
  }

  viewProfile() {
    this.store.dispatch(new ChangeProfileEditMode(false));
  }

  selectFile(file) {
    if (this.typeFile === this.RESUME_FILE) {
      this.isResumeUploading = true;
      this.resumeFile = file.target.files[0];
      this.resumeFile.progress = 0;
      this.authService.uploadResume(file.srcElement.files[0]).subscribe(event => {
        if (event['type'] === HttpEventType.UploadProgress) {
          this.resumeFile.progress = Math.round(100 * event['loaded'] / event['total']);
        } else if (event instanceof HttpResponse) {
          this.isResumeUploading = false;
          const res = event.body;
          if (res['code'] === 0) {
            this.userProfile.document_library = {
              id: null,
              document: null,
              document_name: res['resultMap']['resumeName'],
              create_time: null,
              email: null,
              user_id: null
            };
            this.isResumeUploading = false;
            this.toastr.success('Uploaded successfully.', 'UserInfo');
          } else {
            this.isResumeUploading = false;
            this.toastr.error('Upload Failed.', 'UserInfo');
          }
        }
      }, (err) => {
        this.isResumeUploading = false;
        this.toastr.error('Upload Failed.', 'UserInfo');
      });
    } else {
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
      })
      .catch(reason => {});
    }
  }

  removeResumeFile() {
    this.spinner.show();
    this.store.dispatch(new RemoveResume()).subscribe(res => {
      this.spinner.hide();
      if (!this.userProfile.document_library) {
        this.resumeFile = null;
      }
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
      });
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
      if (!lastRes.residency_school.id) {
        return;
      }
      this.userProfile.profileResidency.push({
        id: null,
        residency_school: {
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
    this.userProfile.profileResidency = this.userProfile.profileResidency.filter(res => res.residency_school.id);
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
    this.userProfile.educations = this.userProfile.educations.filter(edu => edu.end_time);
  }

  addAddress(add: Address) {
    if (add) {
      this.userProfile.practiceAddress = add;
    }
  }

  updateAddress(address: Address) {
    this.userProfile.practiceAddress = address;
  }

  deleteAddress(add: Address) {
    this.userProfile.practiceAddress = null;
  }

  validateAddress() {
    if (this.userProfile.practiceAddress && !this.userProfile.practiceAddress.address1) {
      this.userProfile.practiceAddress = null;
    }
  }
}
