import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Address } from '../../../layout/profile/models/userProfile';

@Component({
  selector: 'dsod-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.scss']
})
export class DSODAddNewAddressComponent implements OnInit {
  @Input() show = false;
  @Input() address: Address;

  states: any[] = [];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAllUSStates().pipe().subscribe(res => {
      this.states = res.resultMap.data;
      console.log(this.states);
    });
  }

}
