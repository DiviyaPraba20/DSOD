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
        padding: 10px 0 20px;
        width: 75%;
        margin: auto;
        text-align: center;
      }
      .ad-banner img {
        max-width: 70%;
      }
    `
  ]
})
export class DSODHomeAdComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
