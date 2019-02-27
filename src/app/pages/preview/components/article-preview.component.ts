import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CMSPageContent } from 'src/app/cms/models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dsod-articel-preivew',
  templateUrl: './article-preview.component.html',
  styleUrls: [
    '../../podcast/components/podcast-content/podcast-content.component.scss',
    '../../article/components/article-media/article-media.component.scss',
    './content.scss'
  ]
})
export class DSODArticelPreviewComponent implements OnInit {
  @Input() content: CMSPageContent;

  contentString: any;
  iFrameCode: any;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.contentString = this.sanitizer.bypassSecurityTrustHtml(this.content.content);
    if (this.content.featuredMedia.type === '6') {
      this.iFrameCode = this.sanitizer.bypassSecurityTrustHtml(this.content.featuredMedia.code.iFrameCode);
    }
  }

  getUrl(id) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }

}
