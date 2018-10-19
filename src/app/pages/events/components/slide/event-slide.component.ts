import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dsod-event-slide',
  templateUrl: './event-slide.component.html',
  styleUrls: ['./event-slide.component.scss']
})
export class DSODEventSlideComponent implements OnInit {
  @Input()
  content;
  constructor() {}

  ngOnInit() {}
}
