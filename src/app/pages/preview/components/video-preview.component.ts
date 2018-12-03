import { Component, Input } from '@angular/core';

@Component({
  selector: 'dsod-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: [
    '../../video/components/video-title/video-title.component.scss',
    './content.scss'
  ]
})
export class DSODVideoPreviewComponent {
  @Input() content;
}
