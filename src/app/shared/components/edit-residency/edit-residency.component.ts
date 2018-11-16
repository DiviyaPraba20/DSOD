import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileResidency } from '../../../layout/profile/models/userProfile';
import { compareElements } from '../../../core/functions/common.function';

@Component({
  selector: 'dsod-edit-residency',
  templateUrl: './edit-residency.component.html',
  styleUrls: ['./edit-residency.component.scss']
})
export class EditResidencyComponent implements OnInit {
  @Input() residency: ProfileResidency;
  @Input() expanded = false;
  @Output() updateResidency: EventEmitter<ProfileResidency> = new EventEmitter();
  @Output() deleteResidency: EventEmitter<ProfileResidency> = new EventEmitter();

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
    if (!this.residency) {
      this.residency = {
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
      };
    } else {
      if (this.residency.end_time) {
        this.residencyEndTime = {
          year: moment(this.residency.end_time).get('year'),
          month: moment(this.residency.end_time).get('month') + 1,
          day: moment(this.residency.end_time).get('date')
        };
      }
    }
    this.authService.getAllResidencies().pipe().subscribe(res => {
      this.residencyList = res.resultMap.data;
      this.residencyList.sort(compareElements);
    });
  }

  onDelete() {
    this.deleteResidency.emit(this.residency);
  }

  onSave() {
    if (this.residencyList.filter(type => type.id === this.residency.residency_school.id).length) {
      this.residency.residency_school = this.residencyList.filter(type => type.id === this.residency.residency_school.id)[0];
    }
    if (this.residencyEndTime && this.residencyEndTime.year) {
      this.residency.end_time = moment().set({
        'year': this.residencyEndTime.year,
        'month': this.residencyEndTime.month - 1,
        'date': this.residencyEndTime.day
      }).format();
      this.residency.start_time = moment().set({
        'year': this.residencyEndTime.year - 1,
        'month': this.residencyEndTime.month - 1,
        'date': this.residencyEndTime.day
      }).format();
    } else {
      this.residency.end_time = null;
      this.residency.start_time = null;
    }

    if (this.validateResidency(this.residency)) {
      this.expanded = false;
      this.updateResidency.emit(this.residency);
    }
  }

  validateResidency(res: ProfileResidency) {
    if (!res.residency_school.id) {
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
