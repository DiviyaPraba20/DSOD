import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'dsod-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class DSODVideoplayerComponent {
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
