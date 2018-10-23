import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { Store } from '@ngxs/store';
import { NgxSpinnerService } from 'ngx-spinner';

import { Login } from '../actions';
import { environment } from 'src/environments/environment';

export class CustomValidators {
  public static pattern(reg: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = <string>control.value;
      return value.match(reg) ? null : { 'pattern': { value } };
    };
  }
}

@Component({
  selector: 'dsod-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isShowPassword = false;
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, CustomValidators.pattern(/^(?=.*\d)(?=.*?[A-Z])[A-Za-z\d#$@!%&*?]{8,}$/g)]],
    client_id: 'fooClientIdPassword'
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.spinner.show();
    this.store.dispatch(new Login(this.loginForm.value)).subscribe(res => {
      this.spinner.hide();
    });
  }

  loginWithLinkedIn() {
    const link = `${environment.LinkedIn.authUrl}?response_type=${environment.LinkedIn.response_type}`
      + `&client_id=${environment.LinkedIn.client_id}&redirect_uri=${environment.LinkedIn.redirect_uri}`
      + `&state=${environment.LinkedIn.state}`;
    window.open(link, '_self');
  }
}
