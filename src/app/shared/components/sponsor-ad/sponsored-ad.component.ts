import { Component, Input } from '@angular/core';

@Component({
  selector: 'dsod-sponsored-ad',
  template: `<div class="ad-wrap text-center">
                <img *ngIf="sponsorName; else other;" class="img-fluid" src="assets/images/sponsor-images/{{sponsorName}}-ad.png" alt="">
                <ng-template #other>
                <img class="img-fluid" src="assets/images/sponsor-images/GSK-ad.png" alt="">
                </ng-template>
            </div> `,
  styleUrls: ['./sponsored-ad.component.scss']
})
export class DSODSponsoredAdComponent {
  @Input() sponsorName:string
  constructor() {}
}
