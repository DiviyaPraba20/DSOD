import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dsod-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class DSODArticleContentComponent implements OnInit {
  @Input() content: string;
  contentString: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.contentString = this.sanitizer.bypassSecurityTrustHtml(this.content);
  }
}
