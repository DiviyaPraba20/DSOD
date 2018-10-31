import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

@Component({
  selector: 'dsod-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss']
})
export class ProfilePanelComponent implements OnInit {
  isEditMode = false;
  profilePanel: Observable<boolean>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.profilePanel = this.store.select(state => state.auth.isOpenedProfilePanel);
  }

}
