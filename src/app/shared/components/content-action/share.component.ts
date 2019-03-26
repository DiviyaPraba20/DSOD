import { Component, OnInit, Input } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { CMSPageContent } from '../../../cms/models/cms.models';

@Component({
  selector: 'dsod-share',
  template: ` <li class="share-dropdown">
        <a>
          <span>
            <img src="assets/images/share-icon.png" alt="">
          </span>
          <span *ngIf="!plain">share</span>
        </a>
        <ul class="share-dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <share-button
              [theme]="'circles-dark'"
              [button]="'facebook'"
              [size]="-7"
              [url]="currentUrl"
              [title]="title"
              [description]="description"
              [image]="image"
            ></share-button>
          </li>
          <li>
            <share-button
              [theme]="'circles-dark'"
              [button]="'twitter'"
              [size]="-7"
              [url]="currentUrl"
              [title]="title"
              [description]="description"
              [image]="image"
            ></share-button>
          </li>
          <li>
            <share-button
              [theme]="'circles-dark'"
              [button]="'linkedin'"
              [size]="-7"
              [url]="currentUrl"
              [title]="title"
              [description]="description"
              [image]="image"
            ></share-button>
          </li>
        </ul>
      </li>`,
  styleUrls: ['./actions.scss']
})
export class DSODShareComponent implements OnInit {
  @Input() content: CMSPageContent;
  @Input() plain: boolean;
 
  currentUrl = window.location.href;
  title = '';
  description = '';
  image = '';

  constructor(
    private meta: Meta
  ) { }

  ngOnInit() {
    this.title = this.content.title;
    this.description = this.content.excerpt;
    this.image = this.content.featuredMedia ? this.content.featuredMedia.code.originalUrl : null;
    this.meta.addTags([
      {name: 'title', content: this.content.title},
      {name: 'description', content: this.content.excerpt},
      {name: 'image', content: this.content.featuredMedia ? this.content.featuredMedia.code.originalUrl : null}
    ]);
  }
}
