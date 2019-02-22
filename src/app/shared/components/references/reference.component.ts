import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dsod-references',
  styleUrls: ['./reference.component.scss'],
  templateUrl: './reference.component.html'
})
export class DSODReferecnceComponent implements OnInit {
  @Input() references = [];

  constructor() {}

  ngOnInit() { }
}
