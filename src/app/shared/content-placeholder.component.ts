import { Component, Input, OnInit } from '@angular/core';
import { DSODContentType } from './models';

@Component({
  selector: 'dsod-content',
  template: `
  <div class="trending-block">
  <div class="trending-block-header">
  <h4>{{title}}</h4>
  <dsod-rating></dsod-rating>
  </div>
  <div class="trending-block-video">
  <ng-template #video>
      <video src="{{url}}"></video>
  </ng-template>
  <ng-template #image>
      <img src="{{url}}" />
  </ng-template>
  <div *ngIf="contentType===video" video else image></div>
            <a href="#" class="play-icon">
                <img src="assets/images/play.png" alt="">
            </a>
        </div>
        <div class="trending-block-caption">
            <h4>{{caption}}</h4>
        </div>
    </div>`
})
export class DSODContentComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  placeholderImageSrc: string;
  @Input()
  url: string;
  @Input()
  caption: string;
  @Input()
  contentType: string;
  @Input()
  topic;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
