import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dsod-bookmark',
  template: `<li>
        <a href="javascript:void(0)">
          <span *ngIf="isBookmark" (click)="toggleBookmark()">
            <img src="./assets/images/bookmarked-ribbon.png" alt="">
          </span>
          <span *ngIf="!isBookmark" (click)="toggleBookmark()">
            <img src="./assets/images/bookmark-ribbon.png" alt="">
          </span>
          Bookmark
        </a>
      </li>`,
  styleUrls: ['./actions.scss']
})
export class DSODBookmarkComponent implements OnInit {
  @Input() isBookmark: boolean;
  @Output() changeBookmark: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(this.isBookmark);
  }

  toggleBookmark() {
    this.changeBookmark.emit(!this.isBookmark);
  }
}
