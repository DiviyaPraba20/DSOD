import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dsod-add-review',
  templateUrl: './add-review-modal.component.html',
  styleUrls: ['./add-review-modal.component.scss']
})
export class DSODAddReviewComponent {
  constructor(public activeModal: NgbActiveModal) {}
  submitReview() {
    this.activeModal.close();
  }
  closeModal() {
    this.activeModal.close();
  }
}
