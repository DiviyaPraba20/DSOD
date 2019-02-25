import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: [
    '../../podcast/components/podcast-content/podcast-content.component.scss',
    '../../video/components/video-title/video-title.component.scss',
    './content.scss'
  ]
})
export class DSODVideoPreviewComponent implements OnInit {
  @Input() content: CMSPageContent;

  contentString: any;
  iFrameCode: any;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.contentString = this.sanitizer.bypassSecurityTrustHtml(this.content.content);
    if (this.content.featuredMedia.type === '6') {
      this.iFrameCode = this.sanitizer.bypassSecurityTrustHtml(this.content.featuredMedia.code.iFrameCode);
    }
  }

  getUrl(id: string) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
