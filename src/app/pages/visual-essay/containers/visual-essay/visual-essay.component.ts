import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import * as actions from '../../../../cms/actions';
import { ActivatedRoute } from '@angular/router';
import { CMSContentParams, CMSResponse, CMSPageContent, Essay} from 'src/app/cms/models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CMSService } from '../../../../cms/services/cms.service';

@Component({
  selector: 'dsod-visual-essay',
  templateUrl: './visual-essay.component.html',
  styleUrls: ['./visual-essay.component.scss']
})
export class VisualEssayComponent implements OnInit {
  trendingTopics$: Observable<CMSResponse<CMSPageContent[]>>;
  params: CMSContentParams = { skip: 0 };
  pageContent$: Observable<CMSPageContent>;
  selectedCarouselImage = null;
  visualEssayId = null;
  visualEssay: Essay = null;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private cmsService: CMSService
  ) {
    route.params.subscribe(r => {
      store.dispatch(new actions.FetchTrendingTopics({ ...this.params, limit: 3 }));
    });
  }

  ngOnInit() {
    this.trendingTopics$ = this.store.select(state => state.cms.trendingTopics);
    // this.pageContent$ = this.store.select(state => state.cms.pageContent);
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
