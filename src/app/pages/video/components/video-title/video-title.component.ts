import { Component, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-video-title',
  template: `
    <div *ngIf="content">
      <h2>{{ content.title }}</h2>
      <span class="by" *ngIf="content && content.author"
        >by {{ content.author.fullName }}</span
      >
    </div>
  `,
  styleUrls: ['./video-title.component.scss']
})
export class DSODVideoHeaderComponent {
  constructor() {}
  @Input()
  content: CMSPageContent;
}
