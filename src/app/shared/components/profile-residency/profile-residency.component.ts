import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileResidency } from '../../../layout/profile/models/userProfile';

@Component({
  selector: 'dsod-profile-residency',
  templateUrl: './profile-residency.component.html',
  styleUrls: ['./profile-residency.component.scss']
})
export class ProfileResidencyComponent implements OnInit {
  @Input() residency: ProfileResidency;
  @Input() editable = false;
  @Output() updateResidency: EventEmitter<ProfileResidency> = new EventEmitter();
  @Output() deleteResidency: EventEmitter<ProfileResidency> = new EventEmitter();

  expandedResSection = false;

  constructor() { }

  ngOnInit() { }

  public expandResidencySection(flag) {
    this.expandedResSection = flag;
  }

  onChangeResidency(res: ProfileResidency) {
    this.updateResidency.emit(res);
    this.expandedResSection = false;
  }

  onDelResidency(res: ProfileResidency) {
    this.deleteResidency.emit(res);
  }
}
