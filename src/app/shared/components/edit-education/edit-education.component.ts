import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Education } from 'src/app/layout/profile/models/userProfile';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dsod-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.scss']
})
export class EditEducationComponent implements OnInit {
  @Input() education: Education;
  @Input() expanded = false;
  @Output() updateEducation: EventEmitter<Education> = new EventEmitter();
  @Output() deleteEducation: EventEmitter<Education> = new EventEmitter();

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
    if (!this.education) {
      this.education = {
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
      }
    } else {
      if (this.education.types === '1') {
        this.isUSSchool = true;
      } else {
        this.isUSSchool = false;
        this.education.dental_school = {
          id: null,
          name: ''
        };
      }
      if (this.education.end_time) {
        this.educationEndTime = {
          year: moment(this.education.end_time).get('year'),
          month: moment(this.education.end_time).get('month') + 1,
          day: moment(this.education.end_time).get('date')
        };
      }
    }

    this.authService.getAllDentalSchools().pipe().subscribe(res => {
      this.detenSchoolList = res.resultMap.data;
    });
  }

  onDelete() {
    this.deleteEducation.emit(this.education);
  }

  onSave() {
    const dentalSchool = this.detenSchoolList.filter(type => type.id === this.education.dental_school.id);
    if (dentalSchool.length) {
      this.education.dental_school = dentalSchool[0];
    }
    if (this.educationEndTime && this.educationEndTime.year) {
      this.education.end_time = moment().set({
        'year': this.educationEndTime.year,
        'month': this.educationEndTime.month - 1,
        'date': this.educationEndTime.day
      }).format();
      this.education.start_time = moment().set({
        'year': this.educationEndTime.year - 1,
        'month': this.educationEndTime.month - 1,
        'date': this.educationEndTime.day
      }).format();
    } else {
      this.education.end_time = null;
      this.education.start_time = null;
    }

    if (this.validateEducation(this.education)) {
      this.expanded = false;
      this.updateEducation.emit(this.education);
    }
  }

  onChangeSchoolType(event) {
    this.isUSSchool = event;
    if (this.isUSSchool) {
      this.education.types = '1';
    } else {
      this.education.types = '0';
    }
  }

  validateEducation(edu: Education) {
    if (!edu.end_time) {
      this.toastr.warning('Please Enter Year of Guraduation', 'Error');
      return false;
    }
    if (edu.types === '1' && !edu.dental_school.name) {
      this.toastr.warning('Please fill out Dental School Field', 'Error');
      return false;
    }
    if (edu.types === '0' && !edu.school_name) {
      this.toastr.warning('Please fill out Dental School Field', 'Error');
      return false;
    }
    return true;
  }
}
