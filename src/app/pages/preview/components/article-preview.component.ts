import { Component, Input } from '@angular/core';
import {environment} from '../../../../environments/environment'

@Component({
  selector: 'dsod-articel-preivew',
  templateUrl: './article-preview.component.html',
  styleUrls: [
    '../../article/components/article-content/article-content.component.scss',
    '../../article/components/article-media/article-media.component.scss'
  ]
})
export class DSODArticelPreviewComponent {
  @Input() content;
  
  getUrl(id){
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
