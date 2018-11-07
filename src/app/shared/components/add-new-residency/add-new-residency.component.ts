import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dsod-add-new-residency',
  templateUrl: './add-new-residency.component.html',
  styleUrls: ['./add-new-residency.component.scss']
})
export class DSODAddNewResidencyComponent implements OnInit {
  @Input() show = false;

  constructor() { }

  ngOnInit() {
  }

}
