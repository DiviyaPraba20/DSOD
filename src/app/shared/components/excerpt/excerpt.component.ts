import { Component, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { Router } from '@angular/router';

@Component({
  selector: 'dsod-excerpt',
  templateUrl: './excerpt.component.html',
  styleUrls: ['./excerpt.component.scss']
})
export class DSODExcerptComponent {
  @Input() topic: CMSPageContent;
  @Input() contentLength;
  @Input() styleFor;
  constructor(private router: Router) {}

  navigateTo(e) {
    if (this.topic.contentTypeName === 'Videos') {
      this.router.navigate(['./video', this.topic.id]);
    } else if (this.topic.contentTypeName === 'Podcasts') {
      this.router.navigate(['./podcast', this.topic.id]);
    } else {
      this.router.navigate(['./article', this.topic.id]);
    }
  }
}
