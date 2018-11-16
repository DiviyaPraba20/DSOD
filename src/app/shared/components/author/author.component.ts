import { Component, Input, OnInit } from '@angular/core';
import { DSODContentAuthor } from '../../models';
import { Authors } from '../../authors/authors';

@Component({
  selector: 'dsod-content-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class DSODContentAuthorComponent implements OnInit {
  @Input()
  author: DSODContentAuthor;
  @Input() authorId;
  authors = Authors;
  constructor() {}
  ngOnInit() {}
}
