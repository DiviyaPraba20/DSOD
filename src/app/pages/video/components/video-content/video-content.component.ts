import { Component, Input, OnInit } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dsod-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss']
})
export class DSODVideoContentComponent implements OnInit {
  @Input()
  content: string;
  contentString:any
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.contentString = this.sanitizer.bypassSecurityTrustHtml(this.content);
  }
}
