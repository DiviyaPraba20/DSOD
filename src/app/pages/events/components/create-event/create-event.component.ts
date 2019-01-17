import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import * as moment from 'moment';

@Component({
  selector: 'dsod-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class DSODCreateEvent implements OnInit {
  selectedDate: any;
  date: any;
  year: any;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.date = moment(this.selectedDate, 'YYYY/MM/DD').format('MMM') +'-'+moment(this.selectedDate).date();
    this.year = moment(this.selectedDate, 'YYYY/MM/DD').format('YYYY')

  }
}