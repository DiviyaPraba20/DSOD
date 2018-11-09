import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { ProfileResidency } from '../../../layout/profile/models/userProfile';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dsod-add-new-residency',
  templateUrl: './add-new-residency.component.html',
  styleUrls: ['./add-new-residency.component.scss']
})
export class DSODAddNewResidencyComponent implements OnInit, OnChanges {
  @Input() show = false;
  @Input() residency: ProfileResidency = null;
  @Output() updateResidency: EventEmitter<ProfileResidency> = new EventEmitter();

  residencyList: any[] = [];
  endTime: NgbDateStruct = {
    year: null,
    month: null,
    day: null
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAllResidencies().pipe().subscribe(res => {
      this.residencyList = res.resultMap.data;
    });

    if (!this.residency) {
      this.residency = {
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
    } else {
      if (this.residency.end_time) {
        this.endTime = {
          year: moment(this.residency.end_time).get('year'),
          month: moment(this.residency.end_time).get('month') + 1,
          day: moment(this.residency.end_time).get('date')
        };
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.show.firstChange && !changes.show.currentValue) {
      if (this.residencyList.filter(type => type.id === this.residency.residency_School.id).length) {
        this.residency.residency_School = this.residencyList.filter(type => type.id === this.residency.residency_School.id)[0];
      }

      if (this.endTime && this.endTime.year) {
        this.residency.end_time = moment().set({
          'year': this.endTime.year,
          'month': this.endTime.month - 1,
          'date': this.endTime.day
        }).format();
      } else {
        this.residency.end_time = null;
      }

      this.updateResidency.emit(this.residency);
    }
  }
}
