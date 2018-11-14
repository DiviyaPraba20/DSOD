import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Experience } from 'src/app/layout/profile/models/userProfile';

@Component({
  selector: 'dsod-profile-experience',
  templateUrl: './profile-experience.component.html',
  styleUrls: ['./profile-experience.component.scss']
})
export class ProfileExperienceComponent implements OnInit {
  @Input() experience: Experience;
  @Input() editable = false;
  @Output() updateExperience: EventEmitter<Experience> = new EventEmitter();
  @Output() deleteExperience: EventEmitter<Experience> = new EventEmitter();

  expandedExpSection = false;

  constructor( ) { }

  ngOnInit() { }

  public expandExperienceSection(flag) {
    this.expandedExpSection = flag;
  }

  onChangeExp(exp: Experience) {
    this.updateExperience.emit(exp);
    this.expandedExpSection = false;
  }

  onDelExp(exp: Experience) {
    this.deleteExperience.emit(exp);
  }
}
