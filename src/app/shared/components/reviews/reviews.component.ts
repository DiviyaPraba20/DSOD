import { Component, Input, OnInit } from '@angular/core';
import { DSODAddReviewComponent } from './add-review/add-review-modal.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CMSPageContent, DSODComment, CMSResponse } from 'src/app/cms/models';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/pages/auth/states/auth.state';
import { UserInfoPayload } from 'src/app/core/models';
import * as actions from '../../actions';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { AddReviewSuccess } from '../../actions';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedState } from '../../state';

@Component({
  selector: 'dsod-article-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class DSODRatingReviewComponent implements OnInit {
  regex = /[+-]?\d+(\.\d+)?/g;
  avgRating: any;
  comments$: Observable<DSODComment[]>;
  reviewsCount: number;
  user: UserInfoPayload;
  contentId: string;
  title: string;
  modalRef: any;
  commentsLength: number;
  toIndex = 4;

  @Input('content')
  set content(value: CMSPageContent) {
    if (value && value.comment.length) {
      this.avgRating = value.avgCommentRating.match(this.regex).map(v => {
        return parseFloat(v);
      });
      this.reviewsCount = value.countOfComment;
      this.contentId = value.id;
      this.title = value.title;
    } else if (value) {
      this.contentId = value.id;
      this.title = value.title;
    }
  }
  constructor(
    private modalService: NgbModal,
    private store: Store,
    private actions$: Actions,
    private route: ActivatedRoute
  ) {
    this.user = store.selectSnapshot(AuthState.userInfo);
    //fetch comments on content load
    route.params.subscribe(r => {
      this.store.dispatch(new actions.FetchComments(r.id));
    });

    //close modal and fetch comments again
    this.actions$.pipe(ofActionDispatched(AddReviewSuccess)).subscribe(data => {
      this.modalRef.close();
      this.store.dispatch(new actions.FetchComments(this.contentId));
    });
  }

  ngOnInit() {
    this.comments$ = this.store.select(state => state.reviews.comments);
    this.comments$.subscribe(data => {
      this.commentsLength = data.length;
    });
  }

  openAddReviewModal() {
    const modalRef = this.modalService.open(DSODAddReviewComponent);
    modalRef.componentInstance.loggedInUser = this.user;
    (modalRef.componentInstance.contentId = this.contentId),
      (modalRef.componentInstance.title = this.title);
    modalRef.componentInstance.userReview.subscribe(data => {
      this.store.dispatch(new actions.AddReview(data));
    });
    this.modalRef = modalRef;
  }

  showAllComments() {
    this.toIndex == this.commentsLength
      ? (this.toIndex = 4)
      : (this.toIndex = this.commentsLength);
  }
}
