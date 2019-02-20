import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'dsod-podcast-preview',
  templateUrl: './podcast-preview.component.html',
  styleUrls: [
    '../../podcast/components/podcast-content/podcast-content.component.scss',
    '../../podcast/components/podcast-header/podcast-header.component.scss',
    '../../../shared/components/author/author.component.scss',
    './content.scss'
  ]
})
export class DSODPodcastPreviewComponent implements OnInit {
  @Input() content;

  contentString: any;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.contentString = this.sanitizer.bypassSecurityTrustHtml(this.content.content);
   }

   getUrl(id: string) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
