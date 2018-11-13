import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileResidency } from '../models/userProfile';

@Component({
  selector: 'dsod-profile-residency',
  templateUrl: './profile-residency.component.html',
  styleUrls: ['./profile-residency.component.scss']
})
export class ProfileResidencyComponent implements OnInit {
  @Input() residencies: ProfileResidency[] = [];
  @Input() editable = false;
  @Output() updateResidency: EventEmitter<ProfileResidency> = new EventEmitter();

  selectedResidency: ProfileResidency;
  expandedResSection = false;
  residencyList: any[] = [];
  residencyEndTime: NgbDateStruct = {
    year: null,
    month: null,
    day: null
  };

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (this.residencies.length) {
      this.selectedResidency = this.residencies[0];
    } else {
      this.selectedResidency = {
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
      };
    }

    this.authService.getAllResidencies().pipe().subscribe(res => {
      this.residencyList = res.resultMap.data;
    });
  }

  public expandResidencySection(flag) {
    if (flag) {
      if (this.residencies.length) {
        this.selectedResidency = this.residencies[0];
      }
      this.initSelectedResidency();
      this.expandedResSection = flag;
      return true;
    } else {
      if (this.residencyList.filter(type => type.id === this.selectedResidency.residency_School.id).length) {
        this.selectedResidency.residency_School = this.residencyList.filter(type => type.id === this.selectedResidency.residency_School.id)[0];
      }
      if (this.residencyEndTime && this.residencyEndTime.year) {
        this.selectedResidency.end_time = moment().set({
          'year': this.residencyEndTime.year,
          'month': this.residencyEndTime.month - 1,
          'date': this.residencyEndTime.day
        }).format();
        this.selectedResidency.start_time = moment().set({
          'year': this.residencyEndTime.year - 1,
          'month': this.residencyEndTime.month - 1,
          'date': this.residencyEndTime.day
        }).format();
      } else {
        this.selectedResidency.end_time = null;
        this.selectedResidency.start_time = this.selectedResidency.end_time;
      }

      if (this.validateSelResidency(this.selectedResidency)) {
        this.expandedResSection = flag;
        this.updateResidency.emit(this.selectedResidency);
        return true;
      } else {
        return false;
      }
    }
  }

  initSelectedResidency() {
    if (this.selectedResidency.end_time) {
      this.residencyEndTime = {
        year: moment(this.selectedResidency.end_time).get('year'),
        month: moment(this.selectedResidency.end_time).get('month') + 1,
        day: moment(this.selectedResidency.end_time).get('date')
      };
    }
  }

  deleteResidency() {
    this.selectedResidency = {
      id: this.selectedResidency.id,
      residency_School: {
        id: null,
        name: ''
      },
      create_time: null,
      start_time: null,
      end_time: null,
      email: '',
      user_id: ''
    };
    this.residencyEndTime = {
      year: null,
      month: null,
      day: null
    };
  }

  validateSelResidency(res: ProfileResidency) {
    console.log(res);
    if (!res.residency_School.id && !res.end_time) {
      return true;
    }
    if (!res.residency_School.id) {
      this.toastr.warning('Please select residency school', 'Error');
      return false;
    }
    if (!res.end_time) {
      this.toastr.warning('Please select year of completion', 'Error');
      return false;
    }
    return true;
  }
}
