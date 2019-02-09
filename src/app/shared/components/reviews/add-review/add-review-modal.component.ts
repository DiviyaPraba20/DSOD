import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoPayload } from 'src/app/core/models';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { AddReviewSuccess } from 'src/app/shared/actions/shared.action';

@Component({
  selector: 'dsod-add-review',
  templateUrl: './add-review-modal.component.html',
  styleUrls: ['./add-review-modal.component.scss']
})
export class DSODAddReviewComponent implements OnInit {
  loggedInUser: UserInfoPayload;
  @Input() title: string;
  contentId: string;
  commentRating = 0;
  commentText: string;
  commentDate = new Date();
  @Output()
  userReview = new EventEmitter();
  constructor(public activeModal: NgbActiveModal, private actions$: Actions) {}
  ngOnInit() {
    this.actions$.pipe(ofActionDispatched(AddReviewSuccess)).subscribe(data => {
      this.activeModal.close();
    });
  }
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
