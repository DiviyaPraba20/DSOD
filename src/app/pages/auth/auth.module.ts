import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LinkedinCallbackComponent } from './linkedin-callback/linkedin-callback.component';
import { AuthService } from '../../core/services/auth.service';
import { AuthGuard } from '../../core/guards/auth.guard';
import { AuthInterceptor } from '../../core/interceptors/auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  declarations: [LoginComponent, SignupComponent, LinkedinCallbackComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    AuthService,
    AuthGuard
  ],
})
export class AuthModule { }
