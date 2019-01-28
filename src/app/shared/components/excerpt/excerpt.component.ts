import { Component, Input } from '@angular/core';

@Component({
  selector: 'dsod-excerpt',
  templateUrl: './excerpt.component.html',
  styleUrls: ['./excerpt.component.scss']
})
export class DSODExcerptComponent {
  @Input() topic:string;
  @Input() contentLength;
  @Input() styleFor;
  constructor(){}
}
