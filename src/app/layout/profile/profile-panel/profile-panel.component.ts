import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dsod-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss']
})
export class ProfilePanelComponent implements OnInit {
  isEditMode = false;

  constructor() { }

  ngOnInit() {
  }

}
