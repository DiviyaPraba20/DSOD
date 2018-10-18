import { Component, Input } from '@angular/core';

@Component({
  selector: 'dsod-content-placeholder',
  template: `<div class="our-content">
                <h2 class="topic-title mb-3">{{title}}</h2>
                <em>by {{by}} </em>
                <p class="mt-4">Invisalign® treatment allows dentists and orthodontists to achieve practice growth. Learn
                  ways to remove patients’ barriers to clear aligner therapy through conveient financing…<a href="#">[more]</a></p>
              </div>`,
  styleUrls: ['./content-placeholder.component.scss']
})
export class DSODContnetComponent {
  @Input()
  title;
  @Input()
  others;
  @Input()
  by;
  constructor() {}
}
