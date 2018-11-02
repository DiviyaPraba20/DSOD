import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-latest-item',
  templateUrl: './latest-item.component.html',
  styleUrls: ['./latest-item.component.scss']
})
export class DSODLatestItemComponent implements OnInit {
  @Input()
  pageContent: CMSPageContent;
  imageUrl: string;

  constructor() {}

  ngOnInit() {
    this.imageUrl = `${environment.url}/file/downloadFileByObjectId?objectId=${
      this.pageContent.featuredMediaId
    }`;
  }
}
