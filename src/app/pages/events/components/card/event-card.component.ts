import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {
  NgbDateAdapter,
  NgbDateStruct,
  NgbDateNativeAdapter,
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import { DSODConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'dsod-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class DSODEventCardComponent implements OnInit {
  @Input() isEditable: boolean;
  @Input() isdeleteable: boolean;
  @Input() event: any;
  @Output() deleteEvent :EventEmitter<any> = new EventEmitter();;
  enableEditing: boolean = false;
  eventDate = new Date('Fri Jan 25 2019 12:00:00 GMT-0500');
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  onCardClick() {
    if (this.isEditable) {
      this.enableEditing = true;
    }
  }

  openConfirmDialog() {
    const modalRef = this.modalService.open(DSODConfirmDialogComponent, {});
    modalRef.componentInstance.msg =
      'Are you sure you want to delete this Event?';
  }
}
