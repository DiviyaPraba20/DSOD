import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dsod-home-ad-banner',
  template: `<section class="sensodyne-gsk">
              <div class="container">
                  <img class="img-fluid" src="./assets/images/home-ad-banner.png">
              </div>
              </section>`,
  styles: [
    ` .sensodyne-gsk {
        padding: 30px 0 42px;
        width: 75%;
        margin: auto;
      }
    `
  ]
})
export class DSODHomeAdComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
