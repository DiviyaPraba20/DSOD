import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'dsod-articel-preivew',
  templateUrl: './article-preview.component.html',
  styleUrls: [
    './content.scss',
    '../../article/components/article-media/article-media.component.scss'
  ]
})
export class DSODArticelPreviewComponent implements OnInit {
  @Input() content;

  ngOnInit() { }

  getUrl(id) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
