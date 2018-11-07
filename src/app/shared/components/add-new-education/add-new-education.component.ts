import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dsod-add-new-education',
  templateUrl: './add-new-education.component.html',
  styleUrls: ['./add-new-education.component.scss']
})
export class DSODAddNewEducationComponent implements OnInit {
  @Input() show = false;

  constructor() { }

  ngOnInit() {
  }

}
