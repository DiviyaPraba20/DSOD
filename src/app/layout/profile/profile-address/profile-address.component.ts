import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/core/services/auth.service';
import { Address } from '../models/userProfile';

@Component({
  selector: 'dsod-profile-address',
  templateUrl: './profile-address.component.html',
  styleUrls: ['./profile-address.component.scss']
})
export class ProfileAddressComponent implements OnInit {
  @Input() address: Address;
  @Output() updateAddress: EventEmitter<Address> = new EventEmitter();

  expandedAddSection = false;
  states: any[] = [];

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.authService.getAllUSStates().pipe().subscribe(res => {
      this.states = res.resultMap.data;
    });
    this.initSelectedAddress();
  }

  expandAddressSection(flag) {
    if (flag) {
      this.expandedAddSection = flag;
    } else {
      if (this.validateAddressFields(this.address)) {
        this.expandedAddSection = flag;
        this.updateAddress.emit(this.address);
      }
    }
  }

  initSelectedAddress() {
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
  }

  deleteAddress() {
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

  validateAddressFields(add: Address) {
    if (!add.address1) {
      this.toastr.error('Please enter address1', 'Error');
      return false;
    }
    if (!add.address2) {
      this.toastr.error('Please enter address2', 'Error');
      return false;
    }
    if (!add.city) {
      this.toastr.error('Please enter city', 'Error');
      return false;
    }
    if (!add.zipCode) {
      this.toastr.error('Please enter zipcode', 'Error');
      return false;
    }
    if (!add.states) {
      this.toastr.error('Please select state', 'Error');
      return false;
    }
    return true;
  }
}
