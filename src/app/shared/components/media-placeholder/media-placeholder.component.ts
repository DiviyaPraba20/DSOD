import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'dsod-media-content',
  template: `<div class="trending-block">
            <div class="trending-block-header">
                <h4>{{title}}</h4>
                <dsod-rating></dsod-rating>
            </div>
            <div class="trending-block-video">
                <img src={{imageUrl}} alt="">
            </div>
            <div *ngIf="caption" class="trending-block-caption">
                <h4>{{caption}}</h4>
            </div>
          </div>`,
  styleUrls: ['./media-placeholder.component.scss']
})
export class DSODMediaContentComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  placeholderImageSrc: string;
  @Input()
  url: string;
  @Input()
  caption: string;
  imageUrl;
  ngOnInit(): void {
    this.imageUrl = `${environment.url}/file/downloadFileByObjectId?objectId=${
      this.placeholderImageSrc
    }`;
  }
}
