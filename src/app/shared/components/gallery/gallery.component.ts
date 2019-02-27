import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'dsod-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class DSODGalleryComponent implements OnInit {
  @Input() photos: any;

  selectedCarouselImage = null;
  galleryImages: any[] = [];

  constructor() { }

  ngOnInit() {
    this.photos.map(photo => {
      this.galleryImages.push({
        originalID: photo.original,
        originalUrl: `${environment.url}/file/downloadFileByObjectId?objectId=${photo.original}`
      });
    });
  }

  getUrl(id) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }

  onChangeImage(carouselImage) {
    this.selectedCarouselImage = carouselImage;
  }
}
