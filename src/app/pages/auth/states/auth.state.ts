import { Router } from '@angular/router';
import { Action, State, StateContext, Store, Selector, Actions } from '@ngxs/store';
import { catchError, tap, map, exhaustMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import * as actions from '../actions';
import { AuthService } from '../../../core/services/auth.service';
import { Response, LoginResponse, SignUpResponse } from '../../../core/models';
import { LoginFailure, LoginSuccess, SignUpSuccess } from '../actions';
import { of, throwError } from 'rxjs';
import { AppNavigate } from 'src/app/actions';
import { handleAPIAuthResponse } from 'src/app/core/functions/common.function';

export interface State {
  pending: boolean;
  error: any;
  isLoggedIn: boolean;
  accessToken: string;
}

@State<State>({
  name: 'auth',
  defaults: {
    pending: false,
    error: null,
    isLoggedIn: false,
    accessToken: ''
  }
})

export class AuthState {
  @Selector() static isLoggedIn(state: State) { return state.isLoggedIn; }
  @Selector() static accessToken(state: State) { return state.accessToken; }


  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  @Action(actions.Login)
  login({ patchState, dispatch }: StateContext<State>, action: actions.Login) {
    patchState({
      pending: true,
      error: null,
    });

    return this.authService.login(action.payload).pipe(
      exhaustMap((response: LoginResponse) => {
        if (response.code !== 0) { return throwError(response); }
        this.toastr.success('Login Success!', 'Login');
        dispatch(new LoginSuccess(response));
      }), catchError((err) => dispatch(new LoginFailure(err.msg))), tap(() => {
        patchState({
          pending: false
        });
      }));
    }
    @Action(actions.LoginSuccess)
    LoginSuccess({patchState}: StateContext<State>, action: actions.LoginSuccess) {
      patchState({
        isLoggedIn: true,
        accessToken: action.payload.resultMap.accesstoken
      });
    }

    @Action(actions.LoginFailure)
    LoginFailure({ patchState }: StateContext<State>, action: actions.LoginFailure) {
      const error = action.payload;
      this.toastr.error(error, 'Login');
      patchState({
        error
      });
  }

  @Action(actions.SignUp)
  signUp({ patchState, dispatch }: StateContext<State>, action: actions.SignUp) {
    patchState({
      pending: true,
      error: null,
      isLoggedIn: false
    });

    return this.authService.signup(action.payload).pipe(
      exhaustMap((response: SignUpResponse) => {
        if (response.code !== 0) {
          return throwError(response);
        }
        return dispatch(new SignUpSuccess(response));
      }),
      catchError((err: Response) => {
        this.toastr.error(err.msg, 'SignUp');
        patchState({
          pending: false,
          isLoggedIn: false,
          error: err.msg
        });
        throw(err);
      }),
      tap(() => {
        this.router.navigate(['/']);
        patchState({
          pending: false,
          isLoggedIn: true,
          error: null
        });
      }
    ));
  }
}


