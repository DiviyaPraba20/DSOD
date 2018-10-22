import { Component, Input } from '@angular/core';

@Component({
  selector: 'dsod-content-placeholder',
  template: `
 <div class="content-block content-block-sm">
			<div class="content-block-header">
					<h4>Orthodontics</h4>
					<dsod-rating></dsod-rating>
			</div>
			<div class="content-block-thumbnail">
					<img  src='/assets/images/featured-sm.png' class="img-fluid" alt="Feautred Thumbnail Large">
			</div>
			<div *ngIf="showSummary" class="block-content">
					<h2 class="topic-title mb-1">Role of Invisalign® Outcome Simulator in Patient Engagement</h2>
					<em *ngIf="showby">by DSODentist <a href="" class="read-about">
					</a> </em>
          <p *ngIf="showDescription" class="mt-3">This module will present best practices that allow you to use Invisalign outcome simulator in your practice…<a href="#">[more]</a></p>
          <a *ngIf="!showDescription" href="#">[more]</a>
			</div>
		</div>`,
  styleUrls: ['./content-placeholder.component.scss']
})
export class DSODContnetComponent {
  @Input()
  content;
  @Input()
  showDescription: boolean;
  @Input()
  showSummary: boolean;
  @Input()
  showBy: boolean;
  constructor() {}
}
