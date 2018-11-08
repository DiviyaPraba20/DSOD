import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoPayload } from 'src/app/core/models';

@Component({
  selector: 'dsod-add-review',
  templateUrl: './add-review-modal.component.html',
  styleUrls: ['./add-review-modal.component.scss']
})
export class DSODAddReviewComponent {
  loggedInUser: UserInfoPayload;
  title: string;
  contentId: string;
  commentRating = 0;
  commentText: string;
  @Output()
  userReview = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) {}
  articleRating(e) {
    this.commentRating = e;
  }
  closeModal() {
    this.activeModal.close();
  }
  submitReview() {
    const comment = {
      email: this.loggedInUser.email,
      contentId: this.contentId,
      commentRating: this.commentRating,
      commentText: this.commentText
    };
    this.userReview.emit(comment);
  }
}
