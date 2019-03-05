import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Essay } from 'src/app/cms/models';
import { environment } from 'src/environments/environment';
import { CMSService } from '../../../../cms/services/cms.service';

@Component({
  selector: 'dsod-visual-essay-preview',
  templateUrl: './visual-essay-preview.component.html',
  styleUrls: ['./visual-essay-preview.component.scss']
})
export class VisualEssayPreviewComponent implements OnInit {
  selectedCarouselImage = null;
  visualEssayId = null;
  visualEssay: Essay = null;

  constructor(
    private route: ActivatedRoute,
    private cmsService: CMSService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.visualEssayId = res.id;
      if (this.visualEssayId) {
        this.cmsService.getVisualEssay(this.visualEssayId).subscribe(data => {
          if (data.code === 0) {
            this.visualEssay = data.resultMap.data;
          }
        });
      }
    });
  }

  onChangeImage(carouselImage) {
    this.selectedCarouselImage = carouselImage;
  }

  getUrl(id) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
