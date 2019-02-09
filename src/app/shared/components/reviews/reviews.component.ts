import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { DSODAddReviewComponent } from './add-review/add-review-modal.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CMSPageContent,
  DSODComment,
  CMSContentParams
} from 'src/app/cms/models';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/pages/auth/states/auth.state';
import { UserInfoPayload } from 'src/app/core/models';
import * as actions from '../../actions';
import { Observable, Subscription } from 'rxjs';
import {ActivatedRoute } from '@angular/router';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'dsod-article-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class DSODRatingReviewComponent implements OnInit, OnDestroy {
  regex = /[+-]?\d+(\.\d+)?/g;
  avgRating: any;
  comments$: Observable<DSODComment[]>;
  reviewsCount: number;
  user: UserInfoPayload;
  contentId: string;
  title: string;
  modalRef: any;
  commentsCount: number;
  toIndex = 4;
  params: CMSContentParams = {
    skip: 0,
  };
  newCommentRating:number;
  totalRating:number;
  subscription: Subscription;
  @Output() updateRating=new EventEmitter();
  @Input('content')
  set content(value: CMSPageContent) {
    if (value && value.comment.length) {
      this.avgRating = Math.round(parseFloat(value.avgCommentRating) * 10) / 10;
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
    private route: ActivatedRoute
  ) {
    this.user = store.selectSnapshot(AuthState.userInfo);
    //fetch comments on content load
    route.params.subscribe(r => {
      this.store.dispatch(
        new actions.FetchComments({ ...this.params, contentId: r.id })
      );
    });
  }

  ngOnInit() {
    this.comments$ = this.store.select(state => state.shared.comments);
    this.subscription = this.comments$.pipe(skip(1)).subscribe(data => {
      let rating = 0;
      this.commentsCount = data.length;
      data.forEach(e => {
        rating += e.comment_rating;
        this.totalRating=rating;
      });
      this.avgRating = Math.round((rating / data.length) * 10) / 10;
    });
  }

  openAddReviewModal() {
    const modalRef = this.modalService.open(DSODAddReviewComponent);
    modalRef.componentInstance.loggedInUser = this.user;
    (modalRef.componentInstance.contentId = this.contentId),
      (modalRef.componentInstance.title = this.title);
    modalRef.componentInstance.userReview.subscribe(data => {
      this.newCommentRating=data.commentRating;
      this.store.dispatch(new actions.AddReview(data));
    });
    modalRef.result.then(()=>{
      let updatedRating = Math.round(((this.totalRating + this.newCommentRating) / (this.commentsCount + 1)) * 10) / 10;
      this.updateRating.emit(updatedRating);
      this.store.dispatch(
        new actions.FetchComments({
          ...this.params,
          contentId: this.contentId
        })
      );
    })
  }

  showAllComments() {
    this.toIndex == this.commentsCount
      ? (this.toIndex = 4)
      : (this.toIndex = this.commentsCount);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
