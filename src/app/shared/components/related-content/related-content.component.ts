import { Component, Input, OnInit } from '@angular/core';
import { RelatedContent } from 'src/app/cms/models';
import { Router } from '@angular/router';
import { CMSService } from '../../../cms/services/cms.service';

@Component({
  selector: 'dsod-related-content',
  templateUrl: './related-content.component.html',
  styleUrls: ['./related-content.component.scss']
})
export class DSODRelatedContentComponent implements OnInit {
  @Input() content: RelatedContent;
  @Input() contentTypeName: string;

  thumbnailUrl = '';

  constructor(
    private router: Router,
    private cmsService: CMSService
  ) {}

  ngOnInit() {
    this.cmsService.findOneContents(this.content.id).subscribe((res: any) => {
      if (res.resultMap.data.featuredMedia) {
        this.thumbnailUrl = res.resultMap.data.featuredMedia.code.thumbnailUrl;
      }
    });
  }

  navigateTo(topic) {
    if (this.contentTypeName === 'Videos') {
      this.router.navigate(['./video', this.content.id]);
    } else if (this.contentTypeName === 'Podcasts') {
      this.router.navigate(['./podcast', this.content.id, 'author', 0]);
    } else {
      this.router.navigate(['./article', this.content.id]);
    }
  }
}
