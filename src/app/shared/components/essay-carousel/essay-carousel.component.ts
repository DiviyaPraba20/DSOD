import { Component, AfterViewInit, ViewChild, ElementRef, Input, OnInit, Output, EventEmitter} from '@angular/core';
import Glide, { Controls, Autoplay, Anchors } from '@glidejs/glide/dist/glide.modular.esm';

@Component({
  selector: 'dsod-essay-images-carousel',
  templateUrl: './essay-carousel.component.html',
  styleUrls: ['./essay-carousel.component.scss']
})
export class DSODEssayImagesComponent implements OnInit, AfterViewInit {
  @Input() visualEssayImages: any;
  @Output() changeImage: EventEmitter<string> = new EventEmitter();
  @ViewChild('slider') slider: ElementRef;

  imageIndex = 0;

  ngOnInit() {
    console.log(this.visualEssayImages);
    this.changeImage.emit(this.visualEssayImages[0].originalID);
  }

  ngAfterViewInit() {
    const elems = this.slider.nativeElement;
    if (elems.children.length > 0) {
      const glide = new Glide('.home-banner', {
        type: 'carousel',
        autoheight: false,
        animationTimingFunc: 'ease',
        padding: 0,
        perView: 3,
        focusAt: 'center',
        dragDistance: 100
      })
      .mount({ Autoplay, Controls, Anchors });

      glide.on(['mount.after', 'run'], () => {
        this.changeImage.emit(this.visualEssayImages[glide.index].originalID);
      });
    }
  }
}
