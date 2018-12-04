import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

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
  getUrl(id) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
