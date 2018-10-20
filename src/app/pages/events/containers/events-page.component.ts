import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Glide, {
  Controls,
  Autoplay,
  Anchors
} from '@glidejs/glide/dist/glide.modular.esm';
import { DSODSliderContent } from '../../../shared/models';
import { DSODContentType } from 'src/app/core/models';

@Component({
  selector: 'dsod-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class DSODEventsPageComponent implements AfterViewInit {
  @ViewChild('slider')
  slider: ElementRef;
  content: DSODSliderContent[] = [
    {
      title: '4 Important "Must Do" Steps for New Dentists',
      description: 'November 15, 2018 | 9 pm EST',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/event-banner-slide1.png',
      url: ''
    }
  ];
  constructor() {}
  ngAfterViewInit() {
    const elems = this.slider.nativeElement as HTMLUListElement;
    if (elems.children.length > 0) {
      new Glide('.events-banner', {
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
