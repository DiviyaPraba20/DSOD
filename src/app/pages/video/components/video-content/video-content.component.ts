import { Component, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss']
})
export class DSODVideoContentComponent {
  @Input()
  content: string;
  constructor() {}
}
