import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  OnChanges
} from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dsod-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class DSODVideoplayerComponent implements OnChanges {
  @Input()
  content: string;
  @ViewChild('video')
  video: ElementRef;
  iframe: any;
  constructor(private sanitizer: DomSanitizer) {}
  ngOnChanges() {
    if (this.content) {
      const regex = /(<iframe.+?<\/iframe>)/g;
      this.iframe = this.content.match(regex).map(v => {
        return v;
      });
      this.iframe = this.sanitizer.bypassSecurityTrustHtml(this.iframe[0]);
    }
  }
}
