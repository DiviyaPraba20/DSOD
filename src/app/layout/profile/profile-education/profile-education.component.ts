import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Education } from 'src/app/layout/profile/models/userProfile';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dsod-profile-education',
  templateUrl: './profile-education.component.html',
  styleUrls: ['./profile-education.component.scss']
})
export class ProfileEducationComponent implements OnInit {
  @Input() educations: Education[] = [];
  @Output() updateEducation: EventEmitter<Education> = new EventEmitter();

  selectedEducation: Education;
  expandedEduSection = false;
  isUSSchool = false;
  detenSchoolList: any[] = [];
  educationEndTime: NgbDateStruct = {
    year: null,
    month: null,
    day: null
  };

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (this.educations.length) {
      this.selectedEducation = this.educations[0];
    } else {
      this.selectedEducation = {
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
      };
    }

    this.authService.getAllDentalSchools().pipe().subscribe(res => {
      this.detenSchoolList = res.resultMap.data;
    });
  }

  expandEducationSection(flag) {
    if (flag) {
      if (this.educations.length) {
        this.selectedEducation = this.educations[0];
      }
      this.initSelectedEducation();
      this.expandedEduSection = flag;
    } else {
      const dentalSchool = this.detenSchoolList.filter(type => type.id === this.selectedEducation.dental_school.id);
      if (dentalSchool.length) {
        this.selectedEducation.dental_school = dentalSchool[0];
      }
      if (this.educationEndTime && this.educationEndTime.year) {
        this.selectedEducation.end_time = moment().set({
          'year': this.educationEndTime.year,
          'month': this.educationEndTime.month - 1,
          'date': this.educationEndTime.day
        }).format();
        this.selectedEducation.start_time = moment().set({
          'year': this.educationEndTime.year - 1,
          'month': this.educationEndTime.month - 1,
          'date': this.educationEndTime.day
        }).format();
      } else {
        this.selectedEducation.end_time = null;
        this.selectedEducation.start_time = this.selectedEducation.end_time;
      }

      if (this.validateSelEducation(this.selectedEducation)) {
        this.expandedEduSection = flag;
        this.updateEducation.emit(this.selectedEducation);
      }
    }
  }

  initSelectedEducation() {
    if (this.selectedEducation.types === '1') {
      this.isUSSchool = true;
    } else {
      this.isUSSchool = false;
      this.selectedEducation.dental_school = {
        id: null,
        name: ''
      };
    }
    if (this.selectedEducation.end_time) {
      this.educationEndTime = {
        year: moment(this.selectedEducation.end_time).get('year'),
        month: moment(this.selectedEducation.end_time).get('month') + 1,
        day: moment(this.selectedEducation.end_time).get('date')
      };
    }
  }

  onChangeSchoolType(event) {
    this.isUSSchool = event;
    if (this.isUSSchool) {
      this.selectedEducation.types = '1';
    } else {
      this.selectedEducation.types = '0';
    }
  }

  deleteEducation() {
    this.selectedEducation = {
      id: this.selectedEducation.id,
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
    };
    this.educationEndTime = {
      year: null,
      month: null,
      day: null
    };
  }

  validateSelEducation(edu: Education) {
    if (!edu.dental_school.id && !edu.school_name && !edu.end_time) {
      return true;
    }
    if (!edu.end_time) {
      this.toastr.error('Please Enter Year of Guraduation', 'Error');
      return false;
    }
    if (edu.types === '1' && !edu.dental_school.name) {
      this.toastr.error('Please fill out Dental School Field', 'Error');
      return false;
    }
    if (edu.types === '0' && !edu.school_name) {
      this.toastr.error('Please fill out Dental School Field', 'Error');
      return false;
    }
    return true;
  }
}
