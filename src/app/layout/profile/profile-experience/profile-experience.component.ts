import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Experience } from 'src/app/layout/profile/models/userProfile';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dsod-profile-experience',
  templateUrl: './profile-experience.component.html',
  styleUrls: ['./profile-experience.component.scss']
})
export class ProfileExperienceComponent implements OnInit {
  @Input() experiences: Experience[] = [];
  @Output() updateExperience: EventEmitter<Experience> = new EventEmitter();

  selectedExperience: Experience;
  expandedExpSection = false;
  isWorking = false;
  practiceTypes: any[] = [];
  practiceRoles: any[] = [];
  practiceDSOs: any[] = [];
  expEndTime: NgbDateStruct = {
    year: null,
    month: null,
    day: null
  };
  expStartTime: NgbDateStruct = {
    year: null,
    month: null,
    day: null
  };

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (this.experiences.length) {
      this.selectedExperience = this.experiences[0];
    } else {
      this.selectedExperience = {
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
      };
    }
    this.authService.getAllPracticeTypes().pipe().subscribe(res => {
      this.practiceTypes = res.resultMap.data;
    });
    this.authService.getAllPracticeRoles().pipe().subscribe(res => {
      this.practiceRoles = res.resultMap.data;
    });
    this.authService.getAllPracticeDSO().pipe().subscribe(res => {
      this.practiceDSOs = res.resultMap.data;
    });
  }

  expandExperienceSection(flag) {
    if (flag) {
      if (this.experiences.length) {
        this.selectedExperience = this.experiences[0];
      }
      this.initSelectedExperience();
      this.expandedExpSection = flag;
    } else {
      if (this.practiceTypes.filter(type => type.id === this.selectedExperience.practice_Type.id).length) {
        this.selectedExperience.practice_Type = this.practiceTypes.filter(type => type.id === this.selectedExperience.practice_Type.id)[0];
      }
      if (this.practiceRoles.filter(type => type.id === this.selectedExperience.practice_Role.id).length) {
        this.selectedExperience.practice_Role = this.practiceRoles.filter(type => type.id === this.selectedExperience.practice_Role.id)[0];
      }
      if (this.practiceDSOs.filter(type => type.id === this.selectedExperience.practice_DSO.id).length) {
        this.selectedExperience.practice_DSO = this.practiceDSOs.filter(type => type.id === this.selectedExperience.practice_DSO.id)[0];
      }
      if (this.expStartTime && this.expStartTime.year) {
        this.selectedExperience.start_time = moment().set({
          'year': this.expStartTime.year,
          'month': this.expStartTime.month - 1,
          'date': this.expStartTime.day
        }).format();
      } else {
        this.selectedExperience.start_time = null;
      }
      if (!this.isWorking && this.expEndTime && this.expEndTime.year) {
        this.selectedExperience.end_time = moment().set({
          'year': this.expEndTime.year,
          'month': this.expEndTime.month - 1,
          'date': this.expEndTime.day
        }).format();
      } else {
        this.selectedExperience.end_time = null;
      }

      if (this.validateSelExperience(this.selectedExperience)) {
        this.expandedExpSection = flag;
        this.updateExperience.emit(this.selectedExperience);
      }
    }
  }

  initSelectedExperience() {
    if (this.selectedExperience.end_time) {
      this.expEndTime = {
        year: moment(this.selectedExperience.end_time).get('year'),
        month: moment(this.selectedExperience.end_time).get('month') + 1,
        day: moment(this.selectedExperience.end_time).get('date')
      };
    }
    if (this.selectedExperience.start_time) {
      this.expStartTime = {
        year: moment(this.selectedExperience.start_time).get('year'),
        month: moment(this.selectedExperience.start_time).get('month') + 1,
        day: moment(this.selectedExperience.start_time).get('date')
      };
    }
  }

  deleteExperience() {
    this.selectedExperience = {
      id: this.selectedExperience.id,
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
    };
    this.expEndTime = {
      year: null,
      month: null,
      day: null
    };
    this.expStartTime = {
      year: null,
      month: null,
      day: null
    };
  }

  validateSelExperience(exp: Experience) {
    if (!exp.practice_Type.id && !exp.practice_Role.id && !exp.start_time) {
      return true;
    }
    if (!exp.practice_Type.id) {
      this.toastr.error('Please select practice type', 'Error');
      return false;
    }
    if (!exp.practice_Role.id) {
      this.toastr.error('Please select role at practice', 'Error');
      return false;
    }
    if (!exp.start_time) {
      this.toastr.error('Please enter working time', 'Error');
      return false;
    }
    return true;
  }
}
