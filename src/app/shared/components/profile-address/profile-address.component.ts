import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Address } from '../../../layout/profile/models/userProfile';

@Component({
  selector: 'dsod-profile-address',
  templateUrl: './profile-address.component.html',
  styleUrls: ['./profile-address.component.scss']
})
export class ProfileAddressComponent implements OnInit {
  @Input() address: Address;
  @Input() editable = false;
  @Output() updateAddress: EventEmitter<Address> = new EventEmitter();
  @Output() deleteAddress: EventEmitter<Address> = new EventEmitter();

  expandedAddSection = false;

  constructor() { }

  ngOnInit() { }

  expandAddressSection(flag) {
    this.expandedAddSection = flag;
  }

  onChangeAdd(add: Address) {
    this.updateAddress.emit(add);
    this.expandedAddSection = false;
  }

  onDelAdd(add: Address) {
    this.deleteAddress.emit(add);
  }
}
