import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dsod-home-ad-banner',
  template: `
    <section class="ad-banner">
      <div class="container">
        <img class="img-fluid" src="./assets/images/home-ad-banner.png" />
      </div>
    </section>
  `,
  styles: [
    ` .ad-banner {
        padding: 25px 0 35px;
        margin: auto;
        text-align: center;
      }
      .ad-banner img {
        max-width: 80%;
      }
    `
  ]
})
export class DSODHomeAdComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
