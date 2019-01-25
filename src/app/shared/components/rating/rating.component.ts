import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dsod-rating',
  template: ` 
    <div class="topic-rating text-right">
        <div *ngIf="rating">
        <span [ngClass]="{'filled':number<=_rating, 'un-filled':number>_rating }" *ngFor="let number of [1,2,3,4,5]" (click)="onClick($event, number)"><i class="fa fa-star" aria-hidden="true"></i></span>
        </div>
        <div *ngIf="!rating">
        <span Class="un-filled" *ngFor="let number of [1,2,3,4,5]" (click)="onClick($event, number)"><i class="fa fa-star" aria-hidden="true"></i></span>
        </div>
    </div>`,
  styleUrls: ['./rating.component.scss']
})
export class DSODRatingComponent {
  regex = /[+-]?\d+(\.\d+)?/g;
  _rating: any;
  @Input()
  clickAble: boolean;
  @Output()
  updateRating = new EventEmitter();

  @Input('rating')
  set rating(value: any) {
    let rating;
    if (typeof value == 'string') {
      rating = value.match(this.regex).map(v => {
        return parseFloat(v);
      });
      this._rating = rating[0];
    } else {
      this._rating = value;
    }
  }

  get rating() {
    return this._rating;
  }

  constructor() {}

  onClick(e, value) {
    if (this.clickAble) {
      if (value == this.rating) {
        value -= 1;
      }
      this.rating = value;
      this.updateRating.emit(this.rating);
    }
  }
}
