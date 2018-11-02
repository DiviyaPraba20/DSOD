import { Component, OnInit, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-latest-item',
  templateUrl: './latest-item.component.html',
  styleUrls: ['./latest-item.component.scss']
})
export class DSODLatestItemComponent implements OnInit {
  @Input()
  latestTopic: CMSPageContent;

  constructor() {}

  ngOnInit() {}
}
