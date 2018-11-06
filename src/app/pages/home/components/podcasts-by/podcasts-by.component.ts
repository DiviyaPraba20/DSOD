import { Component, Input } from '@angular/core';

@Component({
  selector: 'dsod-podcasts-by',
  templateUrl: './podcasts-by.component.html',
  styleUrls: ['./podcasts-by.component.scss']
})
export class DSODPodcastsByComponent {
  @Input()
  author;
  constructor() {}
}
