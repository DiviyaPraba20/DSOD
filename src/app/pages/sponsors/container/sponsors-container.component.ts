import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dsod-sponsors-container',
  templateUrl: './sponsors-container.component.html',
  styleUrls: ['./sponsors-container.component.scss']
})
export class DSODSponsorsContainerComponent implements OnInit {

  constructor() { }
  bannerImages = ['sponsor-1.jpg', 'sponsor-2.jpg', 'sponsor-3.jpg']
  caption ='Engaging education, anywhere'
  ngOnInit() {
  }

}
