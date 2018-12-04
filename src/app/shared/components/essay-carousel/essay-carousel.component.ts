import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';
import Glide, {
  Controls,
  Autoplay,
  Anchors
} from '@glidejs/glide/dist/glide.modular.esm';

@Component({
  selector: 'dsod-essay-images-carousel',
  templateUrl: './essay-carousel.component.html',
  styleUrls: ['./essay-carousel.component.scss']
})
export class DSODEssayImagesComponent implements AfterViewInit {
  @Input() visualEssayImages: any;
  @ViewChild('slider')
  slider: ElementRef;
  ngAfterViewInit() {
    const elems = this.slider.nativeElement;
    if (elems.children.length > 0) {
      new Glide('.home-banner', {
        type: 'carousel',
        autoheight: false,
        animationTimingFunc: 'ease',
        padding: 0,
        perView: 3,
        focusAt: 'center',
        dragDistance: 100
      }).mount({ Autoplay, Controls, Anchors });
    }
  }
}
