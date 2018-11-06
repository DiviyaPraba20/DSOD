import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'dsod-rating',
  template: ` 
    <div class="topic-rating">
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
  _rating: any;
  @Input()
  clickAble: boolean;

  @Input('rating')
  set rating(value: any) {
    if (parseInt(value)) this._rating = value;
    else this._rating = null;
  }

  get rating() {
    return this._rating;
  }

  constructor() {}

  onClick(e, value) {
    if (this.clickAble) {
      this.rating = value;
    }
  }
}
