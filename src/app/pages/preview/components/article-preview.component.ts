import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CMSPageContent } from 'src/app/cms/models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dsod-articel-preivew',
  templateUrl: './article-preview.component.html',
  styleUrls: [
    './content.scss',
    '../../article/components/article-media/article-media.component.scss'
  ]
})
export class DSODArticelPreviewComponent implements OnInit {
  @Input() content: CMSPageContent;
  contentString: any;

  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.contentString = this.sanitizer.bypassSecurityTrustHtml(this.content.content);
   }

  getUrl(id) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
