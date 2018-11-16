import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Experience } from 'src/app/layout/profile/models/userProfile';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dsod-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.scss']
})
export class EditExperienceComponent implements OnInit {
  @Input() experience: Experience;
  @Input() expanded = false;
  @Output() updateExperience: EventEmitter<Experience> = new EventEmitter();
  @Output() deleteExperience: EventEmitter<Experience> = new EventEmitter();

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
    if (!this.experience) {
      this.experience = {
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
    } else {
      if (!this.experience.practice_DSO) {
        this.experience.practice_DSO = {
          id: null,
          name: ''
        };
      }
      if (this.experience.end_time) {
        this.expEndTime = {
          year: moment(this.experience.end_time).get('year'),
          month: moment(this.experience.end_time).get('month') + 1,
          day: moment(this.experience.end_time).get('date')
        };
      }
      if (this.experience.start_time) {
        this.expStartTime = {
          year: moment(this.experience.start_time).get('year'),
          month: moment(this.experience.start_time).get('month') + 1,
          day: moment(this.experience.start_time).get('date')
        };
      }
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

  onDelete() {
    this.deleteExperience.emit(this.experience);
  }

  onSave() {
    if (this.practiceTypes.filter(type => type.id === this.experience.practice_Type.id).length) {
      this.experience.practice_Type = this.practiceTypes.filter(type => type.id === this.experience.practice_Type.id)[0];
    }
    if (this.practiceRoles.filter(type => type.id === this.experience.practice_Role.id).length) {
      this.experience.practice_Role = this.practiceRoles.filter(type => type.id === this.experience.practice_Role.id)[0];
    }
    if (this.practiceDSOs.filter(type => type.id === this.experience.practice_DSO.id).length) {
      this.experience.practice_DSO = this.practiceDSOs.filter(type => type.id === this.experience.practice_DSO.id)[0];
    }
    if (this.expStartTime && this.expStartTime.year) {
      this.experience.start_time = moment().set({
        'year': this.expStartTime.year,
        'month': this.expStartTime.month - 1,
        'date': this.expStartTime.day
      }).format();
    } else {
      this.experience.start_time = null;
    }
    if (!this.isWorking && this.expEndTime && this.expEndTime.year) {
      this.experience.end_time = moment().set({
        'year': this.expEndTime.year,
        'month': this.expEndTime.month - 1,
        'date': this.expEndTime.day
      }).format();
    } else {
      this.experience.end_time = moment().format();
    }

    if (this.validateSelExperience(this.experience)) {
      this.expanded = false;
      this.experience.practice_name = this.experience.practice_Type.name;
      this.updateExperience.emit(this.experience);
    }
  }

  validateSelExperience(exp: Experience) {
    if (!exp.practice_Type.id) {
      this.toastr.warning('Please select practice type', 'Error');
      return false;
    }
    if (!exp.practice_Role.id) {
      this.toastr.warning('Please select role at practice', 'Error');
      return false;
    }
    if (!exp.start_time) {
      this.toastr.warning('Please enter working time', 'Error');
      return false;
    }
    return true;
  }
}
