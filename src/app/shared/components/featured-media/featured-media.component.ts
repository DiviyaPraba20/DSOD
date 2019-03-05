import { Input, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DSODFeaturedMedia } from 'src/app/cms/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dsod-feartured-media',
  templateUrl: './featured-media.component.html',
  styleUrls: ['./featured-media.component.scss']
})

export class DSODFeaturedMediaComponent implements OnInit {
  @Input() featuredMedia: DSODFeaturedMedia;

  iFrameCode: any;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    if (this.featuredMedia.type === '6') {
      this.iFrameCode = this.sanitizer.bypassSecurityTrustHtml(this.featuredMedia.code.iFrameCode);
    }
  }

  getUrl(id) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
