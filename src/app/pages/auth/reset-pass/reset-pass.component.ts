import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth.service';

export class CustomValidators {
  public static pattern(reg: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = <string>control.value;
      return value.match(reg) ? null : { 'pattern': { value } };
    };
  }
}

@Component({
  selector: 'dsod-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {
  isShowPassword = false;
  isShowConfirmPassword = false;
  isForgotPass = true;
  forgotForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  resetForm: FormGroup = this.fb.group({
    email_token: ['', Validators.required],
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, CustomValidators.pattern(/^(?=.*\d)(?=.*?[A-Z])[A-Za-z\d#$@!%&*?]{8,}$/g)]],
    confirmPass: ['', [Validators.required, CustomValidators.pattern(/^(?=.*\d)(?=.*?[A-Z])[A-Za-z\d#$@!%&*?]{8,}$/g)]]
  });

  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private authService: AuthService,
    private toastService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetForm.get('confirmPass').valueChanges.pipe(
      debounceTime(300)
    ).subscribe(confirmPass => {
      if (this.password.value !== confirmPass) {
        this.resetForm.controls['confirmPass'].setErrors({'nomatch': true});
      } else {
        this.resetForm.controls['confirmPass'].setErrors(null);
      }
    });
  }

  get forgotEmail() {
    return this.forgotForm.get('email');
  }

  get tempPass() {
    return this.resetForm.get('email_token');
  }

  get password() {
    return this.resetForm.get('password');
  }

  get confirmPass() {
    return this.resetForm.get('confirmPass');
  }

  forgotPass() {
    this.spinner.show();
    this.authService.forgotPassword(this.forgotForm.value).subscribe(res => {
      this.spinner.hide();
      if (res.code === 0) {
        this.toastService.success('We have sent a new password to your email address successfully!', 'Success');
        setTimeout(() => {
          this.isForgotPass = false;
          this.resetForm.controls['username'].setValue(this.forgotEmail.value);
        }, 3000);
      } else {
        this.toastService.error('Something went wrong!', 'Error');
      }
    });
  }

  resetPassword() {
    this.spinner.show();
    this.authService.resetPassword(this.resetForm.value).subscribe(res => {
      this.spinner.hide();
      if (res.code === 0) {
        this.toastService.success('Your password has been reseted successfully!', 'Success');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      } else {
        this.toastService.error('Something went wrong!', 'Error');
      }
    });
  }
}
