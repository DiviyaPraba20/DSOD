import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dsod-add-new-experience',
  templateUrl: './add-new-experience.component.html',
  styleUrls: ['./add-new-experience.component.scss']
})
export class DSODAddNewExperienceComponent implements OnInit {
  @Input() show = false;

  constructor() { }

  ngOnInit() {
  }

}
