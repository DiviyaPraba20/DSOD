import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input
} from '@angular/core';
import Glide, {
  Controls,
  Autoplay,
  Anchors
} from '@glidejs/glide/dist/glide.modular.esm';
import { DSODSliderContent } from '../../models';
import { DSODContentType } from 'src/app/core/models';

@Component({
  selector: 'dsod-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class DSODCarouselComponent implements AfterViewInit {
  constructor() {}
  @Input()
  loggedIn;
  @ViewChild('slider')
  slider: ElementRef;
  content: DSODSliderContent[] = [
    {
      title: 'Do what you do',
      subtitle: '...with the best support possible',
      description:
        'Get real-time access to clinical experts and a nationwide community of like-minded professionals — join the DSODentist community TODAY!',
      actionName: 'Join',
      actionLink: '/signup',
      contentType: DSODContentType.Image,
      src: 'assets/images/home-slide.png',
      url: ''
    },
    {
      title: null,
      subtitle: null,
      description: null,
      actionName: null,
      actionLink: null,
      contentType: DSODContentType.Image,
      src: 'assets/images/home-slide-2.jpg',
      url: ''
    },
    {
      title: null,
      subtitle: null,
      description: null,
      actionName: null,
      actionLink: null,
      contentType: DSODContentType.Image,
      src: 'assets/images/home-slide-3.jpg',
      url: ''
    },
    {
      title: null,
      subtitle: null,
      description: null,
      actionName: null,
      actionLink: null,
      contentType: DSODContentType.Image,
      src: 'assets/images/home-slide-4.jpg',
      url: ''
    },
    {
      title: null,
      subtitle: null,
      description: null,
      actionName: null,
      actionLink: null,
      contentType: DSODContentType.Image,
      src: 'assets/images/home-slide-5.jpg',
      url: ''
    }
  ];

  ngAfterViewInit() {
    const elems = this.slider.nativeElement as HTMLUListElement;
    if (elems.children.length > 0) {
      new Glide('.home-banner', {
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
