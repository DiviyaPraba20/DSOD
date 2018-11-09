import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { UserProfileData, Experience, ProfileResidency, Education } from '../models/userProfile';
import { environment } from 'src/environments/environment';
import { ChangeProfileEditMode } from '../../actions/layout.actions';
import { AuthService } from 'src/app/core/services/auth.service';


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
    private cdr: ChangeDetectorRef
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

  onCheck() {
    console.log(this.userProfile);
  }

  saveProfile() {
    this.store.dispatch(new ChangeProfileEditMode(false));
  }

  selectFile(file) { }

  updateExperience(exp: Experience) {
    const index = this.userProfile.experiences.findIndex(x => x.id === exp.id);
    this.userProfile.experiences[index] = exp;
    this.cdr.detectChanges();
  }

  addNewExperience(exp: Experience) {
    setTimeout(() => {
      this.userProfile.experiences.push(exp);
      this.cdr.detectChanges();
    }, 100);
  }

  updateResidency(res: ProfileResidency) {
    const index = this.userProfile.profileResidency.findIndex(x => x.id === res.id);
    this.userProfile.profileResidency[index] = res;
    this.cdr.detectChanges();
  }

  addNewResidency(res: ProfileResidency) {
    setTimeout(() => {
      this.userProfile.profileResidency.push(res);
      this.cdr.detectChanges();
    }, 100);
  }

  updateEducation(edu: Education) {
    const index = this.userProfile.educations.findIndex(x => x.id === edu.id);
    this.userProfile.educations[index] = edu;
    this.cdr.detectChanges();
  }

  addNewEducation(edu: Education) {
    setTimeout(() => {
      this.userProfile.educations.push(edu);
      this.cdr.detectChanges();
    }, 100);
  }
}
