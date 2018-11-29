import { Component, Input } from '@angular/core';

@Component({
  selector: 'dsod-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: [
    '../../video/components/video-title/video-title.component.scss',
    '../../video/components/video-content/video-content.component.scss'
  ]
})
export class DSODVideoPreviewComponent {
  @Input() content;
}
