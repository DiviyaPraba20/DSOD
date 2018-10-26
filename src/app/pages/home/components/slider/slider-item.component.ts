import { Component, Input, OnInit } from '@angular/core';
import { DSODSliderContent } from '../../models';
import { DSODContentType } from 'src/app/core/models';
import { debug } from 'util';

@Component({
  selector: 'dsod-slider-item',
  template: `
  <li class="glide__slide">
  <ng-template #image>
    <img src={{content.src}} alt=""/>>
    <div class="slide-caption">
      <h1>{{content.title}}</h1>
      <h2>{{content.subtitle}}</h2>
      <p>{{content.description}}</p>
      <div class="join-wrap" *ngIf="!loggedIn">
        <a [routerLink]="[content.actionLink]" class="join-btn">{{content.actionName}}</a>
      </div>
    </div>
  </ng-template>
  <ng-template #video>
    <video src=""></video>
  </ng-template>
    <ng-container *ngTemplateOutlet="image; context: contentType === 'Image'"></ng-container>
    <ng-container *ngTemplateOutlet="video; context: contentType === 'Video'"></ng-container>

    </li>
  `,
  styleUrls: ['./slider-item.component.scss']
})
export class DSODSliderItemComponent implements OnInit {
  @Input()
  content: DSODSliderContent;
  @Input()
  loggedIn: boolean;
  contentType: string;

  ngOnInit() {
    this.contentType = DSODContentType[this.content.contentType];
  }
}
