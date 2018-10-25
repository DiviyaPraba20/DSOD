import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dsod-terms-modal',
  templateUrl: './terms-modal.component.html',
  styleUrls: ['./terms-modal.component.scss']
})
export class TermsModalComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.dismiss('cancel');
  }

}
