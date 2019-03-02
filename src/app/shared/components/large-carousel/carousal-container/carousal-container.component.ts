import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import Glide, {
  Controls,
  Autoplay,
  Anchors
} from '@glidejs/glide/dist/glide.modular.esm';

@Component({
  selector: 'dsod-carousal-lg',
  templateUrl: './carousal-container.component.html',
  styleUrls: ['./carousal-container.component.scss']
})
export class DSODCarousalLargeComponent implements OnInit, AfterViewInit {
  @Input() carousalItems: any;
  @ViewChild('slider') slider: ElementRef;
  constructor() {}
  ngOnInit() {}

  ngAfterViewInit() {
    const elems = this.slider.nativeElement as HTMLUListElement;
    if (elems.children.length > 0) {
      new Glide('.banner', {
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
