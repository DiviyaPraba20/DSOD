import { Component, Input } from '@angular/core';

@Component({
  selector: 'dsod-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class DSODGalleryComponent {
  @Input() photosUrls: any;
}
