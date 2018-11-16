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
  croppedFile: any;
  fileName = '';

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    if (this.imageChangedEvent.srcElement && this.imageChangedEvent.srcElement.files[0]) {
      this.fileName = this.imageChangedEvent.srcElement.files[0].name;
    }
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageCroppedFile(file: any) {
    this.croppedFile = new File([file], this.fileName);
  }
  imageLoaded() {
    this.cropperReady = true;
  }
  loadImageFailed () {
    console.log('Load failed');
  }
  done() {
    this.activeModal.close({
      croppedImage: this.croppedImage,
      croppedFile: this.croppedFile
    });
  }
  cancel() {
    this.activeModal.dismiss('cancel');
  }
}
