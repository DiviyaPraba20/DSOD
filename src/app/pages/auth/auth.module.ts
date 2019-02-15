import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LinkedinCallbackComponent } from './linkedin-callback/linkedin-callback.component';
import { AuthInterceptor } from '../../core/interceptors/auth.interceptor';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { TermsModalComponent } from './terms-modal/terms-modal.component';
import { PolicyModalComponent } from './policy-modal/policy-modal.component';
import { HttpErrorInterceptor } from 'src/app/core/interceptors/errors.interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    LinkedinCallbackComponent,
    ResetPassComponent,
    TermsModalComponent,
    PolicyModalComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }
  ],
  entryComponents: [
    TermsModalComponent,
    PolicyModalComponent
  ]
})
export class AuthModule { }
