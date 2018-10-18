import { Router } from '@angular/router';

import { Action, State, StateContext, Store } from '@ngxs/store';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as actions from '../actions';
import { AuthService } from '../../../core/services/auth.service';
import { LoginPayload, LoginResponse, SignUpPayload, SignUpResponse, Response } from '../../../core/models';
import { AuthActions, LoginSuccess, LoginFailure, SignUpSuccess, SignUpFailure } from '../actions';

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
    private authService: AuthService,
    private router: Router
  ) { }

  @Action(actions.Login)
  login({ patchState }: StateContext<State>, action: actions.Login) {
    patchState({
      pending: true,
      error: null,
      isLoggedIn: false
    });

    return this.authService.login(action.payload).pipe(
      tap((result: Response) => {
        if (result.code === 0) {
          this.router.navigate(['/']);
          patchState({
            pending: false,
            isLoggedIn: true,
            error: null
          });
        } else {
          patchState({
            pending: false,
            isLoggedIn: true,
            error: result.msg
          });
        }
      },
      catchError(err => of(new LoginFailure))
    ));
  }

  @Action(actions.SignUp)
  signUp({ patchState }: StateContext<State>, action: actions.SignUp) {
    patchState({
      pending: true,
      error: null,
      isLoggedIn: false
    });

    return this.authService.signup(action.payload).pipe(
      tap((result: Response) => {
        if (result.code === 0) {
          this.router.navigate(['/']);
          patchState({
            pending: false,
            isLoggedIn: true,
            error: null
          });
        } else {
          patchState({
            pending: false,
            isLoggedIn: true,
            error: result.msg
          });
        }
      },
      catchError(err => {
        console.log(err);
        patchState({
          pending: false,
          isLoggedIn: true,
          error: null
        });
        return of(err);
      })
    ));
  }
}
