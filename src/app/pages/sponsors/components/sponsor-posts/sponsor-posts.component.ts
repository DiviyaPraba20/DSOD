import { Component, OnInit, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-sponsor-posts',
  templateUrl: './sponsor-posts.component.html',
  styleUrls: ['./sponsor-posts.component.scss']
})
export class SponsorPostsComponent implements OnInit {
  @Input() posts: CMSPageContent[];

  constructor() { }

  ngOnInit() { }
}
