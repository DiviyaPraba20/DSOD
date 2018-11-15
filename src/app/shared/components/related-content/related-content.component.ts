import { Component, Input } from '@angular/core';
import { RelatedContent } from 'src/app/cms/models';
import { Router } from '@angular/router';

@Component({
  selector: 'dsod-related-content',
  templateUrl: './related-content.component.html',
  styleUrls: ['./related-content.component.scss']
})
export class DSODRelatedContent {
  @Input() content: RelatedContent;
  @Input() contentTypeName: string;
  constructor(private router: Router) {}
  navigateTo(topic) {
    if (this.contentTypeName == 'Videos')
      this.router.navigate(['./video', this.content.id]);
    else if (this.contentTypeName == 'Podcasts')
      this.router.navigate(['./podcast', this.content.id, 'author', 0]);
    else this.router.navigate(['./article', this.content.id]);
  }
}
