import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dsod-edit-settings',
  templateUrl: './edit-settings.component.html',
  styleUrls: ['./edit-settings.component.scss']
})
export class EditSettingsComponent implements OnInit {
  @Input() expanded = false;
  @Output() updateSettings: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onSave() { }
}
