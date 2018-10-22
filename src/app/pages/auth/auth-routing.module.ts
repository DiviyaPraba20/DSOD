import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LinkedinCallbackComponent } from './linkedin-callback/linkedin-callback.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'signup',
  component: SignupComponent
}, {
  path: 'auth/linkedin',
  component: LinkedinCallbackComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
