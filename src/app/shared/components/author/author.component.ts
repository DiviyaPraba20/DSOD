import { Component, Input, OnInit } from '@angular/core';
import { DSODContentAuthor } from '../../models';
import { Authors } from '../../authors/authors';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-content-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class DSODContentAuthorComponent implements OnInit {
  @Input()
  podcast: CMSPageContent;
  constructor() {}
  ngOnInit() {}
}
