import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'dsod-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DSODFooterComponent implements OnInit {
  currentUrl = window.location.hostname;

  constructor() {}

  ngOnInit() { }
}
