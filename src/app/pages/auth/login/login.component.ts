import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { Store } from '@ngxs/store';

import { Login } from '../actions';

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
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    username: ['test@email.com', [Validators.required, Validators.email]],
    password: ['Yoon1104@', [
      Validators.required,
      CustomValidators.pattern(/^(?=.*\d)(?=.*?[A-Z])(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,}$/g)
    ]],
    client_id: 'fooClientIdPassword'
  });

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new Login(this.loginForm.value)).subscribe(res => {
      if (res.auth.error) {
        alert(res.auth.error);
      }
    });
  }

  loginWithLinkedIn() {}
}
