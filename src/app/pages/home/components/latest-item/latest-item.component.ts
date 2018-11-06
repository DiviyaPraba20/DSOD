import { Component, OnInit, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { Router } from '@angular/router';

@Component({
  selector: 'dsod-latest-item',
  templateUrl: './latest-item.component.html',
  styleUrls: ['./latest-item.component.scss']
})
export class DSODLatestItemComponent implements OnInit {
  @Input()
  latestTopic: CMSPageContent;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(latestTopic) {
    if (latestTopic.contentTypeName == 'Videos')
      this.router.navigate(['./video', latestTopic.id]);
    else if (latestTopic.contentTypeName == 'Podcasts')
      this.router.navigate(['./podcast', latestTopic.id]);
    else this.router.navigate(['./article', latestTopic.id]);
  }
}
