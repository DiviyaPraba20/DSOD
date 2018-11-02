import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';
import { Store } from '@ngxs/store';
import * as actions from '../../../cms/actions';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'dsod-topic',
  template: ` 
		<div class="feautred-block feautred-block-sm">
			<div class="feautred-block-header">
					<h4>{{topic.categoryName}}</h4>
					<dsod-rating></dsod-rating>
			</div>
			<div class="feautred-block-thumbnail" *ngIf="topic.featuredMediaId && showImage &&!topic.videos">
          <img  src={{imageUrl}} class="img-fluid" alt="Feautred Thumbnail Large">
          <a href="" class="read-about">
              <img src="assets/images/article-icon.png" alt="">
          </a>
						</div>
				<div class="feautred-block-content">
					<h2 class="topic-title mb-1">{{topic.title}}</h2>
					<em *ngIf="topic.content">{{(topic.content | slice:1:getIndex(topic.content)-1)}} <a href="" class="read-about">
              <img *ngIf="topic.contentTypeName=='Articles'&& !topic.featuredMediaId" src="assets/images/article-icon.png" alt="">
              <img *ngIf="topic.contentTypeName=='Videos'" src="assets/images/article-icon.png" alt="">
          </a> </em>
					<p *ngIf="topic.content" class="mt-3">{{(topic.content | slice:getIndex(topic.content):contentLenght)+'...'}}<a [routerLink]="['/article']">[more]</a></p>
			</div>
		</div>`,
  styleUrls: ['./topic.component.scss']
})
export class DSODTopicComponent implements OnInit {
  @Input()
  topic: CMSPageContent;
  @Input()
  contentLenght: number;
  @Input()
  showImage: boolean;
  isLoading: boolean;
  imageUrl: string;

  constructor(
    private store: Store,
    private spinnerService: NgxSpinnerService
  ) {}
  ngOnInit() {
    if (this.topic.featuredMediaId) {
      this.imageUrl = `https://devcmsapi1.dsodentist.com/content/contentservice/v1/file/downloadFileByObjectId?objectId=${
        this.topic.featuredMediaId
      }`;
    }
  }

  getIndex(content: string) {
    return content.indexOf('\n');
  }
}
