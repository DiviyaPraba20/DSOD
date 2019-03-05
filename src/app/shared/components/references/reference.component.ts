import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dsod-references',
  styleUrls: ['./reference.component.scss'],
  templateUrl: './reference.component.html'
})
export class DSODReferecnceComponent implements OnInit {
  @Input() references = [];

  constructor(
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() { }

  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
