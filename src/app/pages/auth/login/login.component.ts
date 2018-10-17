import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'dsod-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  loginWithLinkedIn() {
    // window.open(environment.LinkedIn.authUrl);
  }
}
