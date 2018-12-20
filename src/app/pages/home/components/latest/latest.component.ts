import { Component, OnInit, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { Router } from '@angular/router';

@Component({
  selector: 'dsod-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class DSODLatestComponent {
  @Input() latestTopics: CMSPageContent[];

  constructor(private router: Router) {}

  navigateTo(content: CMSPageContent) {
    if (content.contentTypeName === 'Videos') {
      this.router.navigate(['./video', content.id]);
    } else {
      this.router.navigate(['./article', content.id]);
    }
  }
}
