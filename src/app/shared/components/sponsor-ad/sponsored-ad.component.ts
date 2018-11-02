import { Component, Input } from '@angular/core';

@Component({
  selector: 'dsod-sponsored-ad',
  template: `<div class="ad-wrap text-center">
                <img class="img-fluid" src="./assets/images/ad.png" alt="">
            </div> `,
  styleUrls: ['./sponsored-ad.component.scss']
})
export class DSODSponsoredAdComponent {
  constructor() {}
}
