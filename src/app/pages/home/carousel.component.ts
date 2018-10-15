import { Component, OnInit } from '@angular/core';
import Glide, {
  Controls,
  Autoplay,
  Anchors
} from '@glidejs/glide/dist/glide.modular.esm';

@Component({
  selector: 'dsod-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    new Glide('.home-banner', {
      type: 'carousel',
      autoheight: false,
      autoplay: 8000,
      animationTimingFunc: 'ease',
      animationDuration: 3000,
      padding: 0,
      gap: 0,
      dragDistance: 100
    }).mount({ Autoplay, Controls, Anchors });
    
  }
}
