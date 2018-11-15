import { Component, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { Authors } from '../../../../shared/authors/authors';

@Component({
  selector: 'dsod-podcasts-by',
  templateUrl: './podcasts-by.component.html',
  styleUrls: ['./podcasts-by.component.scss']
})
export class DSODPodcastsByComponent {
  authors = Authors;
  @Input()
  podcasts: CMSPageContent[];
  @Input() imageIndex: number;
  @Input() indexStart: number;
  @Input() indexEnd: number;
  constructor() {}
}
