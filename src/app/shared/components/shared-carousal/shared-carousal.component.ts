import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import Glide, {
  Controls,
  Autoplay,
  Anchors
} from '@glidejs/glide/dist/glide.modular.esm';

@Component({
  selector: 'dsod-shared-carousal',
  templateUrl: './shared-carousal.component.html',
  styleUrls: ['./shared-carousal.component.scss']
})
export class DSODSharedCarousalComponent implements AfterViewInit {
  @Input() images: any;
  @Input() caption: string;
  @ViewChild('slider')
  slider: ElementRef;
  constructor() {}
  ngAfterViewInit() {
    const elems = this.slider.nativeElement as HTMLUListElement;
    if (elems.children.length > 0) {
      new Glide('.shared-carousal', {
        type: 'carousel',
        autoheight: false,
        autoplay: 8000,
        animationTimingFunc: 'ease',
        animationDuration: 1000,
        padding: 0,
        gap: 0,
        dragDistance: 100
      }).mount({ Autoplay, Controls, Anchors });
    }
  }
}
