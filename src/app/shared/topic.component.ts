import { Component, Input } from "@angular/core";

@Component({
  selector: 'dsod-topic',
  template: ` 
		<div class="feautred-block feautred-block-sm">
			<div class="feautred-block-header">
					<h4>{{topic.title}}</h4>
					<dsod-rating></dsod-rating>
			</div>
			<div class="feautred-block-thumbnail">
					<img *ngIf="topic.image" src={{topic.image}} class="img-fluid" alt="Feautred Thumbnail Large">
			</div>
			<div class="feautred-block-content">
					<h2 class="topic-title mb-1">{{topic.summary}} </h2>
					<em>by DSODentist <a href="" class="read-about">
							<img src={{topic.icon}} alt="">
					</a> </em>
					<p class="mt-3">{{topic.description}}<a href="#">[more]</a></p>
			</div>
		</div>`,
  styleUrls: ['./topic.component.scss']
})
export class DSODTopicComponent {
  @Input() topic;

  constructor() {}
}