import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Store } from '@ngxs/store';

import { SignUp } from '../actions';

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
export class SignupComponent implements OnInit {
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

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit() {
  }

  signUp() {
    this.store.dispatch(new SignUp(this.signUpForm.value)).subscribe(res => {
      if (res.auth.error) {
        alert(res.auth.error);
      }
    });
  }
}
