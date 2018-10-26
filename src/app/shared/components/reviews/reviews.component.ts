import { Component } from '@angular/core';
import { DSODAddReviewComponent } from './add-review/add-review-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dsod-article-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class DSODRatingReviewComponent {
  constructor(private modalService: NgbModal) {}

  openAddReviewModal() {
    const modalRef = this.modalService.open(DSODAddReviewComponent);
  }
}
