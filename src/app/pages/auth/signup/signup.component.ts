import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { SignUp } from '../actions';
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
  selector: 'dsod-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup = this.fb.group({
    full_name: ['test', Validators.required],
    username: ['test@email.com', [Validators.required, Validators.email]],
    password: ['Yoon1104@', [
      Validators.required,
      CustomValidators.pattern(/^(?=.*\d)(?=.*?[A-Z])(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,}$/g)
    ]],
    is_student: '0',
    client_id: 'fooClientIdPassword'
  });
  authErrorSub: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.authErrorSub = this.store.select(state => state.auth.error).subscribe(error => {
      // console.log(error);
      // if (error && error.msg) {
      //   this.toastr.error('Toastr Test', 'Login');
      // }
      // this.toastr.error('Toastr Test', 'Login');
    });
  }

  ngOnDestroy() {
    this.authErrorSub.unsubscribe();
  }

  signUp() {
    this.store.dispatch(new SignUp(this.signUpForm.value));
  }

  loginWithLinkedIn() {
    const link = `${environment.LinkedIn.authUrl}?response_type=${environment.LinkedIn.response_type}`
      + `&client_id=${environment.LinkedIn.client_id}&redirect_uri=${environment.LinkedIn.redirect_uri}`
      + `&state=${environment.LinkedIn.state}`;
    window.open(link, '_self');
  }
}
