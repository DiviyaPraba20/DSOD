import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'dsod-education-item-card',
  templateUrl: './education-item-card.component.html',
  styleUrls: ['./education-item-card.component.scss']
})
export class EducationItemCardComponent implements OnInit, AfterViewInit {
  video:any;
  bufferdLength:any;
  @ViewChild('video') myDiv: ElementRef;
  @Input() sampleVideo:any;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(){
    this.video = this.myDiv.nativeElement
    this.video.removeAttribute('controls');
    this.video.addEventListener('ended', ()=> {
      this.video.play();
    });

    this.video.addEventListener('progress', (v) => {
      this.video.removeAttribute('poster');
    });
  }

  onMouseOver(e) {
      this.video.play();
  }

  onMouseLeave(e) {
    this.video.currentTime=0
    this.video.pause();
  }

}
