import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {
  NgbDateAdapter,
  NgbDateStruct,
  NgbDateNativeAdapter
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dsod-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class DSODEventCardComponent implements OnInit {
  @Input() isEditable: boolean;
  @Input() event:any;
  enableEditing: boolean = false;
  eventDate=new Date('Fri Jan 25 2019 12:00:00 GMT-0500');
  constructor() {}

  ngOnInit() {}

  onCardClick() {
    if (this.isEditable) {
      this.enableEditing = true;
    }
  }
}
