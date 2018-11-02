import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'dsod-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class DSODAudioPlayerComponent implements AfterViewInit {
  player: any;
  duration: any;
  volume = 100;
  isPlaying: boolean;
  @ViewChild('curretTime')
  curretTime: ElementRef;
  @ViewChild('trackLength')
  trackLength: ElementRef;
  constructor() {}

  ngAfterViewInit() {
    requestAnimationFrame(() => {
      const wavesurfer = WaveSurfer.create({
        container: '#playerContainer',
        reponsive: true,
        waveColor: '#d4d3d3',
        progressColor: '#869aa8',
        barWidth: 2,
        barGap: 3
      });

      wavesurfer.load('./assets/be_cool.wav');
      wavesurfer.on('audioprocess', () => {
        this.curretTime.nativeElement.innerHTML = this.formatTime(
          wavesurfer.getCurrentTime()
        );
      });
      wavesurfer.on('ready', () => {
        this.trackLength.nativeElement.innerHTML = this.formatTime(
          wavesurfer.getDuration()
        );
        wavesurfer.setVolume(this.volume / 100);
      });
      this.player = wavesurfer;
    });
  }

  onChangeVolume() {
    this.player.setVolume(this.volume / 100);
  }

  playPause() {
    this.isPlaying = !this.isPlaying;
    this.player.playPause();
  }

  formatTime(time) {
    return [
      Math.floor((time % 3600) / 60), // minutes
      ('00' + Math.floor(time % 60)).slice(-2) // seconds
    ].join(':');
  }
}
