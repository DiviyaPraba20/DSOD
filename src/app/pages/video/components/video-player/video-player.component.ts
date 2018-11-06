import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  OnChanges
} from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class DSODVideoplayerComponent {
  @Input()
  content: CMSPageContent;
  @ViewChild('video')
  video: ElementRef;
  constructor() {}

  forward() {
    const video = this.video.nativeElement;
    video.currentTime += 15;
  }

  rewind() {
    const video = this.video.nativeElement;
    video.currentTime -= 15;
  }
}
