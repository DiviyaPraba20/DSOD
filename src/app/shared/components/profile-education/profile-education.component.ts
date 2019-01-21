import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Education } from 'src/app/layout/profile/models/userProfile';

@Component({
  selector: 'dsod-profile-education',
  templateUrl: './profile-education.component.html',
  styleUrls: ['./profile-education.component.scss']
})
export class ProfileEducationComponent implements OnInit {
  @Input() education: Education;
  @Input() editable = false;
  @Output() updateEducation: EventEmitter<Education> = new EventEmitter();
  @Output() deleteEducation: EventEmitter<Education> = new EventEmitter();

  expandedEduSection = false;

  constructor() { }

  ngOnInit() { }

  public expandEducationSection(flag) {
    this.expandedEduSection = flag;
  }

  onChangeEdu(edu: Education) {
    this.updateEducation.emit(edu);
    this.expandedEduSection = false;
  }

  onDelEdu(edu: Education) {
    this.deleteEducation.emit(edu);
  }
}
