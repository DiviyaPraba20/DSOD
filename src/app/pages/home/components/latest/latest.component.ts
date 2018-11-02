import { Component, OnInit, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class DSODLatestComponent {
  @Input()
  latestTopics: CMSPageContent[];

  constructor() {}
}
