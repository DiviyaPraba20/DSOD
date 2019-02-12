import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'dsod-education-item-card',
  templateUrl: './education-item-card.component.html',
  styleUrls: ['./education-item-card.component.scss']
})
export class EducationItemCardComponent implements OnInit, AfterViewInit {
  video:any;
  @ViewChild('video') myDiv: ElementRef;
  @Input() sampleVideo:any;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(){
    this.video = this.myDiv.nativeElement;
    this.video.removeAttribute('controls');
    this.video.addEventListener('ended', ()=> {
      this.video.play();
    });
  }

  onMouseOver(e) {
    let playPromise = this.video.play();

    if (playPromise !== undefined) {
      playPromise.then(_ => {
        this.video.play()
      })
        .catch(error => {
        });
    }
    
  }

  onMouseLeave(e) {
    this.video.currentTime=0
    this.video.pause();
  }
}
