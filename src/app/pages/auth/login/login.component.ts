import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';

import { Login } from '../actions';
import { AuthService } from '../../../core/services/auth.service';
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
  loginForm: FormGroup = this.fb.group({
    username: ['test@email.com', [Validators.required, Validators.email]],
    password: ['Yoon1104@', [
      Validators.required,
      CustomValidators.pattern(/^(?=.*\d)(?=.*?[A-Z])(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,}$/g)
    ]],
    client_id: 'fooClientIdPassword'
  });
  authErrorSub: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit() {
    this.authErrorSub = this.store.select(state => state.auth.error).subscribe(error => {
      // console.log(error);
    });
  }

  ngOnDestroy() {
    this.authErrorSub.unsubscribe();
  }

  login() {
    this.store.dispatch(new Login(this.loginForm.value));
  }

  loginWithLinkedIn() {
    const link = `${environment.LinkedIn.authUrl}?response_type=${environment.LinkedIn.response_type}`
      + `&client_id=${environment.LinkedIn.client_id}&redirect_uri=${environment.LinkedIn.redirect_uri}`
      + `&state=${environment.LinkedIn.state}`;
    window.open(link, '_self');
  }
}
