import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dsod-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  @Input() editable = false;
  @Output() updateSettings: EventEmitter<any> = new EventEmitter();

  expandedSettings = false;

  constructor() { }

  ngOnInit() { }

  public expandSettingsSection(flag) {
    this.expandedSettings = flag;
  }

  onChangeSettings() {
    this.updateSettings.emit(true);
    this.expandedSettings = false;
  }
}
