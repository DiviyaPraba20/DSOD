import { Component, OnInit, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class DSODTrendingComponent {
  @Input()
  trendingTopics: CMSPageContent[];
  @Input() sponsorName:string;
  constructor() {}
}
