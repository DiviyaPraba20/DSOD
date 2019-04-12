import { Component, OnInit, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-essay-content',
  templateUrl: './essay-content.component.html',
  styleUrls: ['./essay-content.component.scss']
})
export class DSODEssayContentComponent implements OnInit {
  @Input() content: CMSPageContent;
  @Input() rating: number;
  @Input() isLoggedIn:boolean;

  constructor() {}

  ngOnInit(): void {
  }
}
