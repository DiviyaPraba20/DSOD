import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
;

@Component({
  selector: 'dsod-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class DSODConfirmDialogComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}
  @Input() msg: string;
  @Output() onYes: EventEmitter<any> = new EventEmitter();
  ngOnInit() {}

  onclickYes() {
    this.onYes.emit('yes');
  }
}
