import { Component, Input, OnInit } from '@angular/core';
import { DSODContentAuthor } from '../../models';

@Component({
  selector: 'dsod-content-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class DSODContentAuthorComponent implements OnInit {
  @Input()
  author: DSODContentAuthor;
  constructor() {}
  ngOnInit() {}
}
