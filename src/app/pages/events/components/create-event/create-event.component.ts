import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'dsod-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class DSODCreateEventComponent implements OnInit {
  selectedDate: any;
  date: any;
  year: any;
  isEditingEnable = false;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.date = moment(this.selectedDate, 'YYYY/MM/DD').format('MMM') + '-' + moment(this.selectedDate).date();
    this.year = moment(this.selectedDate, 'YYYY/MM/DD').format('YYYY');
  }

  onEditEvent(event) {

  }
}
