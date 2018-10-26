import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dsod-share',
  template: ` <li class="share-dropdown">
        <a>
          <span>
            <img src="assets/images/share-icon.png" alt="">
          </span>
          share
        </a>
        <ul class="share-dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <share-button
              [theme]="'circles-dark'"
              [button]="'email'"
              [size]="-7"
              [url]="currentUrl"
            ></share-button>
          </li>
          <li>
            <share-button
              [theme]="'circles-dark'"
              [button]="'facebook'"
              [size]="-7"
              [url]="currentUrl"
            ></share-button>
          </li>
          <li>
            <share-button
              [theme]="'circles-dark'"
              [button]="'pinterest'"
              [size]="-7"
              [url]="currentUrl"
            ></share-button>
          </li>
          <li>
            <share-button
              [theme]="'circles-dark'"
              [button]="'twitter'"
              [size]="-7"
              [url]="currentUrl"
            ></share-button>
          </li>
          <li>
            <share-button
              [theme]="'circles-dark'"
              [button]="'linkedin'"
              [size]="-7"
              [url]="currentUrl"
            ></share-button>
          </li>
        </ul>
      </li>`,
  styleUrls: ['./actions.scss']
})
export class DSODShareComponent implements OnInit {

  // currentUrl = window.location.href;
  currentUrl = 'https://devangular1.dsodentist.com/dsodt';
  constructor() { }

  ngOnInit() {

  }

}
