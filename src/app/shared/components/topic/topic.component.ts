import { Component, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { Router } from '@angular/router';

@Component({
  selector: 'dsod-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class DSODTopicComponent {
  @Input()
  topic: CMSPageContent;
  @Input()
  showImage?: boolean;
  @Input()
  showHeader?: boolean;
  @Input()
  styleFor: string;

  constructor(private router: Router) {}

  navigateTo(e) {
    if (this.topic.contentTypeName == 'Videos')
      this.router.navigate(['./video', this.topic.id]);
    else if (this.topic.contentTypeName == 'Podcasts')
      this.router.navigate(['./podcast', this.topic.id]);
    else this.router.navigate(['./article', this.topic.id]);
  }
}
