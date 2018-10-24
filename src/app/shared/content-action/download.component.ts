import { Component } from '@angular/core';

@Component({
  selector: 'dsod-download',
  template: `<li>
        <a href="javascript:void(0)">
          <span>
            <img src="/assets/images/download-icon.png" alt="">
          </span>
          Download
        </a>
      </li>`,
  styleUrls: ['./actions.scss']
})
export class DSODDownloadComponent {}
