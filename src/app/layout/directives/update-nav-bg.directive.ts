import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[onScroll-update]' })
export class OnScrollUpdateBgDirective {
  constructor(private ele: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  uopdateBackground(e) {
    if (window.pageYOffset > 0) {
     this.ele.nativeElement.classList.add('bg-dark-scroll');
     this.ele.nativeElement.classList.add('shrink');
    } else {
      this.ele.nativeElement.classList.remove('bg-dark-scroll');
      this.ele.nativeElement.classList.remove('shrink');
    }
  }
}
