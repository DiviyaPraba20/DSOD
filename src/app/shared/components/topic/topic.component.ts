import { Component, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dsod-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class DSODTopicComponent {
  @Input() topic: CMSPageContent;
  @Input() showImage?: boolean;
  @Input() showHeader?: boolean;
  @Input() styleFor: string;
  @Input() showRating: boolean;
  @Input() imgLarge?: boolean;
  @Input() contentLength?:number;

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
  onClickCategory(e){
    this.router.navigate(['./category', e]);
  }

  getImageUrl(id:string){
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`
  }
}
