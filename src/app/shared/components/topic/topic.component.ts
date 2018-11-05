import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

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

  constructor() {}
  ngOnInit() {}

  getIndex(content: string) {
    return content.indexOf('\n');
  }
}
