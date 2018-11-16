import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/core/services/auth.service';
import { Address } from '../../../layout/profile/models/userProfile';


@Component({
  selector: 'dsod-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {
  @Input() address: Address;
  @Input() expanded = false;
  @Output() updateAddress: EventEmitter<Address> = new EventEmitter();
  @Output() deleteAddress: EventEmitter<Address> = new EventEmitter();

  expandedAddSection = false;
  states: any[] = [];

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (!this.address) {
      this.address = {
        id: null,
        address1: '',
        address2: '',
        city: '',
        zipCode: '',
        states: '',
        email: '',
        user_id: ''
      };
    }
    this.authService.getAllUSStates().pipe().subscribe(res => {
      this.states = res.resultMap.data;
    });
  }

  onDelete() {
    this.deleteAddress.emit(this.address);
  }

  onSave() {
    if (this.validateAddressFields(this.address)) {
      this.expanded = false;
      this.updateAddress.emit(this.address);
    }
  }

  validateAddressFields(add: Address) {
    if (!add.address1) {
      this.toastr.warning('Please enter address1', 'Error');
      return false;
    }
    if (!add.address2) {
      this.toastr.warning('Please enter address2', 'Error');
      return false;
    }
    if (!add.city) {
      this.toastr.warning('Please enter city', 'Error');
      return false;
    }
    if (!add.zipCode) {
      this.toastr.warning('Please enter zipcode', 'Error');
      return false;
    }
    if (!add.states) {
      this.toastr.warning('Please select state', 'Error');
      return false;
    }
    return true;
  }
}
