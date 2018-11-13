import { Component, OnInit, Input } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper/src/image-cropper.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dsod-avatar-cropper',
  templateUrl: './avatar-cropper.component.html',
  styleUrls: ['./avatar-cropper.component.scss']
})
export class AvatarCropperComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  cropperReady = false;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log(this.imageChangedEvent);
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    this.cropperReady = true;
  }
  loadImageFailed () {
    console.log('Load failed');
  }
  done() {
    this.activeModal.close(this.croppedImage);
  }
  cancel() {
    this.activeModal.dismiss('cancel');
  }
}
