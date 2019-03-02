import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import * as actions from '../../actions';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { skip } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DSODAddReviewComponent } from '..';
import { AuthState } from 'src/app/pages/auth/states/auth.state';
import { UserInfoPayload } from 'src/app/core/models';
import { AddReviewSuccess } from '../../actions';

@Component({
  selector: 'dsod-rating',
  template: `
    <div class="topic-rating text-right">
      <div *ngIf="avgRating">
        <span
          [ngClass]="{ filled: number <= avgRating,'nbl':number <= avgRating&&sponsorName=='NBL','gsk':number <= avgRating&&sponsorName=='GSK','aln':number <= avgRating&&sponsorName=='ALN', 'un-filled': number > avgRating }"
          *ngFor="let number of [1, 2, 3, 4, 5]"
          (click)="onClick($event, number)"
          ><i class="fa fa-star" aria-hidden="true"></i
        ></span>
      </div>
      <div *ngIf="!avgRating">
        <span
          Class="un-filled"
          *ngFor="let number of [1, 2, 3, 4, 5]"
          (click)="onClick($event, number)"
          ><i class="fa fa-star" aria-hidden="true"></i
        ></span>
      </div>
    </div>
  `,
  styleUrls: ['./rating.component.scss']
})
export class DSODRatingComponent implements OnInit {
  isLoggedIn: boolean;
  @Input()
  clickAble: boolean;
  @Input() readingType: string;
  @Input() title: string;
  @Input() contentId: string;
  @Input() avgRating: number;
  @Input() commentsCount: any;
  @Output()
  updateRating = new EventEmitter();
  @Input() sponsorName:string;
  newCommentRating: number;
  user: UserInfoPayload;

  constructor(
    private store: Store,
    private router: Router,
    private modalService: NgbModal,
    private actions$: Actions
  ) {}

  ngOnInit() {
    this.store
      .select(state => state.auth.isLoggedIn)
      .pipe()
      .subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      });
    this.user = this.store.selectSnapshot(AuthState.userInfo);
  }

  onClick(e, value: number) {
    if (this.isLoggedIn) {
      if (this.clickAble && !this.readingType) {
        if (value == this.avgRating) {
          value -= 1;
        }
        this.avgRating = value;
        this.updateRating.emit(this.avgRating);
      } else if (this.readingType) {
        this.store.dispatch(
          new actions.FetchComments({ skip: 0, contentId: this.contentId })
        );
        const modalRef = this.modalService.open(DSODAddReviewComponent);
        modalRef.componentInstance.loggedInUser = this.user;
        (modalRef.componentInstance.contentId = this.contentId),
          (modalRef.componentInstance.title = this.title);
        modalRef.componentInstance.userReview.subscribe(data => {
          this.newCommentRating = data.commentRating;
          if (!this.commentsCount) {
            this.commentsCount += 1;
          } else {
            this.commentsCount = parseInt(this.commentsCount) + 1;
          }
          this.store.dispatch(new actions.AddReview(data));
        });
        modalRef.result.then(() => {
          this.calculteRating();
        });
      } else {
        return;
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  calculteRating() {
    this.avgRating = Math.round(
      (((this.commentsCount * this.avgRating + this.newCommentRating) /
        this.commentsCount) *
        10) /
        10
    );
  }
}
