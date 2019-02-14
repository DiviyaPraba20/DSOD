import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LinkedinCallbackComponent } from './linkedin-callback/linkedin-callback.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { NavigationGuard } from '../../core/guards/navigation.guard';

const routes: Routes = [{
  path: 'login',
  canActivate: [NavigationGuard],
  component: LoginComponent
}, {
  path: 'signup',
  component: SignupComponent
}, {
  path: 'reset-pass',
  component: ResetPassComponent
}, {
  path: 'auth/linkedin',
  component: LinkedinCallbackComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
