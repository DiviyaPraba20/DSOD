import { Action, State, StateContext, Store } from '@ngxs/store';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as actions from '../actions';
import { AuthService } from '../../../core/services/auth.service';
import { LoginPayload, LoginResponse, SignUpPayload, SignUpResponse } from '../../../core/models/auth';

export interface State {
  pending: boolean;
  error: any;
  isLoggedIn: boolean;
}

@State<State>({
  name: 'auth',
  defaults: {
    pending: false,
    error: null,
    isLoggedIn: false
  }
})

export class AuthState {
  constructor(
    private store: Store,
    private authService: AuthService
  ) { }

  @Action(actions.Login)
  login({ patchState }: StateContext<State>, payload: LoginPayload) {
    return this.authService.login(payload).pipe(
      tap((result: LoginResponse) => {
        console.log(result);
      }
    ));
  }

  @Action(actions.SignUp)
  signUp({ patchState }: StateContext<State>, payload: SignUpPayload) {
    return this.authService.signup(payload).pipe(
      tap((result: SignUpResponse) => {
        console.log(result);
      }
    ));
  }
}
