import { Component } from '@angular/core';

@Component({
  selector: 'dsod-share',
  template: ` <li class="share-dropdown">
        <a href="#">
          <span>
            <img src="assets/images/share-icon.png" alt="">
          </span>
          share
        </a>
        <ul class="share-dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
          </li>
        </ul>
      </li>`,
  styleUrls: ['./actions.scss']
})
export class DSODShareComponent {}
