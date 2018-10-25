import { Component } from '@angular/core';

@Component({
  selector: 'dsod-bookmark',
  template: `<li>
        <a href="javascript:void(0)">
          <span>
            <img src="/assets/images/bookmark-ribbon.png" alt="">
          </span>
          Bookmark
        </a>
      </li>`,
  styleUrls: ['./actions.scss']
})
export class DSODBookmarkComponent {}
