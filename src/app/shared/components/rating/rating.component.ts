import { Component, Input } from '@angular/core';

@Component({
  selector: 'dsod-rating',
  template: ` 
    <div class="topic-rating">
        <div *ngIf="rating">
        <span [ngClass]="{'filled':number<=rating, 'un-filled':number>rating }" *ngFor="let number of [1,2,3,4,5]" (click)="onClick($event, number)"><i class="fa fa-star" aria-hidden="true"></i></span>
        </div>
        <div *ngIf="!rating">
        <span Class="un-filled" *ngFor="let number of [1,2,3,4,5]" (click)="onClick($event, number)"><i class="fa fa-star" aria-hidden="true"></i></span>
        </div>
    </div>`,
  styleUrls: ['./rating.component.scss']
})
export class DSODRatingComponent {
  @Input()
  clickAble: boolean;
  @Input()
  rating;

  constructor() {}

  onClick(e, value) {
    if (this.clickAble) {
      this.rating = value;
    }
  }
}
