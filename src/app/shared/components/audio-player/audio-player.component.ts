import { Component, AfterViewInit, ViewChild, ElementRef, Input, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import * as WaveSurfer from 'wavesurfer.js';
import { CMSPageContent } from 'src/app/cms/models';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'dsod-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class DSODAudioPlayerComponent implements AfterViewInit, OnDestroy, OnInit {
  @Input() content: CMSPageContent;
  @ViewChild('curretTime') curretTime: ElementRef;
  @ViewChild('trackLength') trackLength: ElementRef;

  player: any;
  duration: any;
  isLoading = true;
  volume = 100;
  isPlaying: boolean;
  playIndex = -1;

  constructor(
    private cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    requestAnimationFrame(() => {
      if (this.content && this.content.podcastUrls && this.content.podcastUrls.length) {
        const wavesurfer = WaveSurfer.create({
          container: '#playerContainer',
          reponsive: true,
          waveColor: '#0198c6',
          progressColor: '#d4d3d3',
          barWidth: 2,
          barGap: 3
        });
        this.isLoading = true;
        this.playIndex = 0;
        this.isPlaying = false;
        this.spinner.show();
        wavesurfer.load(this.content.podcastUrls[0], null, 'auto');
        this.cdr.detectChanges();

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
          this.isLoading = false;
          this.spinner.hide();
          this.cdr.detectChanges();
        });
        wavesurfer.on('waveform-ready', () => {
          this.isLoading = false;
          this.cdr.detectChanges();
        });
        wavesurfer.on('finish', () => {
          this.isPlaying = false;
          if (this.playIndex < this.content.podcastUrls.length - 1) {
            this.playIndex++;
            this.onLoadPodcast();
          }
          this.cdr.detectChanges();
        });
        this.player = wavesurfer;
      }
    });
  }

  ngAfterViewInit() { }

  onLoadPodcast() {
    this.spinner.show();
    this.player.load(this.content.podcastUrls[this.playIndex], null, 'auto');
  }

  onChangeVolume() {
    this.player.setVolume(this.volume / 100);
  }

  playPause() {
    if (!this.isLoading) {
      this.isPlaying = !this.isPlaying;
      this.player.playPause();
    }
  }

  formatTime(time) {
    return [
      Math.floor((time % 3600) / 60), // minutes
      ('00' + Math.floor(time % 60)).slice(-2) // seconds
    ].join(':');
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.destroy();
    }
  }
}
