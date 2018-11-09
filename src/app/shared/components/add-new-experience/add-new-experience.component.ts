import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Experience } from '../../../layout/profile/models/userProfile';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dsod-add-new-experience',
  templateUrl: './add-new-experience.component.html',
  styleUrls: ['./add-new-experience.component.scss']
})
export class DSODAddNewExperienceComponent implements OnInit, OnChanges {
  @Input() show = false;
  @Input() experience: Experience = null;
  @Output() updateExperience: EventEmitter<Experience> = new EventEmitter();

  practiceTypes: any[] = [];
  practiceRoles: any[] = [];
  practiceDSOs: any[] = [];
  isCurrenWorking = false;
  startTime: NgbDateStruct = {
    year: null,
    month: null,
    day: null
  };
  endTime: NgbDateStruct = {
    year: null,
    month: null,
    day: null
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAllPracticeTypes().pipe().subscribe(res => {
      this.practiceTypes = res.resultMap.data;
    });

    this.authService.getAllPracticeRoles().pipe().subscribe(res => {
      this.practiceRoles = res.resultMap.data;
    });

    this.authService.getAllPracticeDSO().pipe().subscribe(res => {
      this.practiceDSOs = res.resultMap.data;
    });

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
      if (this.experience.start_time) {
        this.startTime = {
          year: moment(this.experience.start_time).get('year'),
          month: moment(this.experience.start_time).get('month') + 1,
          day: moment(this.experience.start_time).get('date')
        };
      }
      if (this.experience.end_time) {
        this.endTime = {
          year: moment(this.experience.end_time).get('year'),
          month: moment(this.experience.end_time).get('month') + 1,
          day: moment(this.experience.end_time).get('date')
        };
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.show.firstChange && !changes.show.currentValue) {
      if (this.startTime && this.startTime.year) {
        this.experience.start_time = moment().set({
          'year': this.startTime.year,
          'month': this.startTime.month - 1,
          'date': this.startTime.day
        }).format();
      } else {
        this.experience.start_time = null;
      }
      if (!this.isCurrenWorking && this.endTime && this.endTime.year) {
        this.experience.end_time = moment().set({
          'year': this.endTime.year,
          'month': this.endTime.month - 1,
          'date': this.endTime.day
        }).format();
      } else {
        this.experience.end_time = null;
      }

      if (this.practiceTypes.filter(type => type.id === this.experience.practice_Type.id).length) {
        this.experience.practice_Type = this.practiceTypes.filter(type => type.id === this.experience.practice_Type.id)[0];
      }
      if (this.practiceRoles.filter(type => type.id === this.experience.practice_Role.id).length) {
        this.experience.practice_Role = this.practiceRoles.filter(type => type.id === this.experience.practice_Role.id)[0];
      }
      if (this.practiceDSOs.filter(type => type.id === this.experience.practice_DSO.id).length) {
        this.experience.practice_DSO = this.practiceDSOs.filter(type => type.id === this.experience.practice_DSO.id)[0];
      }

      this.updateExperience.emit(this.experience);
    }
  }
}
