import { Component, Input, OnInit } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { Router } from '@angular/router';

@Component({
  selector: 'dsod-search-result-item',
  templateUrl: 'search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class DSODSearchItemComponent {
  @Input() topic: CMSPageContent;

  constructor(private router: Router) {}

  navigateTo(result) {
    if (result.contentTypeName === 'Videos') {
      this.router.navigate(['./video', result.id]);
    } else if (result.contentTypeName === 'Articles') {
      this.router.navigate(['./article', result.id]);
    } else {
      this.router.navigate(['./podcast', result.id]);
    }
  }
}
