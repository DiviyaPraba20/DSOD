import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/core/services/auth.service';
import { Address } from '../../../layout/profile/models/userProfile';

@Component({
  selector: 'dsod-profile-address',
  templateUrl: './profile-address.component.html',
  styleUrls: ['./profile-address.component.scss']
})
export class ProfileAddressComponent implements OnInit, OnChanges {
  @Input() address: Address;
  @Input() editable = false;
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

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.address.currentValue) {
      this.initSelectedAddress();
    }
  }

  public expandAddressSection(flag) {
    if (flag) {
      this.expandedAddSection = flag;
      return true;
    } else {
      if (this.validateAddressFields(this.address)) {
        this.expandedAddSection = flag;
        this.updateAddress.emit(this.address);
        return true;
      } else {
        return false;
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
    if (!add.address1 && !add.address2 && !add.city && !add.zipCode && !add.states) {
      return true;
    }
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
