import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Education } from 'src/app/layout/profile/models/userProfile';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dsod-add-new-education',
  templateUrl: './add-new-education.component.html',
  styleUrls: ['./add-new-education.component.scss']
})
export class DSODAddNewEducationComponent implements OnInit, OnChanges {
  @Input() show = false;
  @Input() education: Education;
  @Output() updateEducation: EventEmitter<Education> = new EventEmitter();

  detenSchoolList: any[] = [];
  endTime: NgbDateStruct = {
    year: null,
    month: null,
    day: null
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAllDentalSchools().pipe().subscribe(res => {
      this.detenSchoolList = res.resultMap.data;
    });

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
        types: ''
      };
    } else {
      if (this.education.end_time) {
        this.endTime = {
          year: moment(this.education.end_time).get('year'),
          month: moment(this.education.end_time).get('month') + 1,
          day: moment(this.education.end_time).get('date')
        };
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.show.firstChange && !changes.show.currentValue) {
      if (this.detenSchoolList.filter(type => type.id === this.education.dental_school.id).length) {
        this.education.dental_school = this.detenSchoolList.filter(type => type.id === this.education.dental_school.id)[0];
      }

      if (this.endTime && this.endTime.year) {
        this.education.end_time = moment().set({
          'year': this.endTime.year,
          'month': this.endTime.month - 1,
          'date': this.endTime.day
        }).format();
      } else {
        this.education.end_time = null;
      }

      this.updateEducation.emit(this.education);
    }
  }
}
