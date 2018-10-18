import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthActions } from '../actions';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { Login } from '../actions/auth.actions';

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
    full_name: ['', Validators.required],
    username: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      CustomValidators.pattern(/^(?=.*\d)[A-Za-z\d#$@!%&*?]{6,}$/g)
    ]]
  });

  constructor(
    private fb: FormBuilder,
    private authActions: Actions
  ) { }

  ngOnInit() {
  }

  signUp() {
    console.log(this.signUpForm.value);
    this.authActions.pipe(ofActionDispatched(Login)).subscribe(res => {
      console.log(res);
    });
  }
}
