import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: [
    '../../video/components/video-title/video-title.component.scss',
    './content.scss'
  ]
})
export class DSODVideoPreviewComponent implements OnInit {
  @Input() content:CMSPageContent;
  contentString:any;
  constructor(private sanitizer: DomSanitizer){}
  ngOnInit(){
    this.contentString = this.sanitizer.bypassSecurityTrustHtml(this.content.content);
  }
  getUrl(id:string) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
