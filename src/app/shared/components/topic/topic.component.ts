import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { Router } from '@angular/router';

@Component({
  selector: 'dsod-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class DSODTopicComponent implements OnInit {
  @Input()
  topic: CMSPageContent;
  @Input()
  contentLenght?: number;
  @Input()
  showImage?: boolean;
  @Input()
  showHeader?: boolean;
  @Input()
  styleFor: string;

  constructor(private router: Router) {}
  ngOnInit() {}

  getIndex(content: string) {
    return content.indexOf('\n');
  }
  navigateTo(topic) {
    if (topic.contentTypeName == 'Videos')
      this.router.navigate(['./video', topic.id]);
    else if (topic.contentTypeName == 'Podcasts')
      this.router.navigate(['./podcast', topic.id]);
    else this.router.navigate(['./article', topic.id]);
  }
}
