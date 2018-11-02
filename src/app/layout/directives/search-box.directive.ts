import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[enable-search]' })
export class SearchBoxDirective {
  constructor() {}

  @HostListener('click', ['$event'])
  onIconClick() {
    const input = document.getElementById('search-box');
    input.classList.toggle('search-active');
  }
}
