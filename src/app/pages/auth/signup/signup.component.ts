import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';

import { SignUp } from '../actions';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

export class CustomValidators {
  public static pattern(reg: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = <string>control.value;
      return value.match(reg) ? null : { 'pattern': { value } };
    };
  }
}

@Component({
  selector: 'dsod-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup = this.fb.group({
    full_name: ['', Validators.required],
    username: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      CustomValidators.pattern(/^(?=.*\d)(?=.*?[A-Z])[A-Za-z\d#$@!%&*?]{8,}$/g)
    ]],
    is_student: '0',
    client_id: 'fooClientIdPassword'
  });
  authErrorSub: Subscription = new Subscription();
  isShowPassword = false;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.authErrorSub = this.store.select(state => state.auth.error).subscribe(error => { });
  }

  ngOnDestroy() {
    this.authErrorSub.unsubscribe();
  }

  get fullName() {
    return this.signUpForm.get('full_name');
  }

  get username() {
    return this.signUpForm.get('username');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  signUp() {
    this.spinner.show();
    this.store.dispatch(new SignUp(this.signUpForm.value)).subscribe(res => {
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
