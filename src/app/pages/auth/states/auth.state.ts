import { Action, State, StateContext, Store, Selector, Actions } from '@ngxs/store';
import { catchError, tap, map, exhaustMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import * as actions from '../actions';
import { AuthService } from '../../../core/services/auth.service';
import { LoginResponse, SignUpResponse } from '../../../core/models';
import { LoginFailure, LoginSuccess, SignUpSuccess, SignUpFailure } from '../actions';

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
    private toastr: ToastrService
  ) { }

  @Action(actions.Login)
  login({ patchState, dispatch }: StateContext<State>, action: actions.Login) {
    patchState({
      pending: true,
      error: null,
      isLoggedIn: false,
      accessToken: ''
    });

    return this.authService.login(action.payload).pipe(
      exhaustMap((response: LoginResponse) => {
        if (response.code !== 0) {
          return dispatch(new LoginFailure(response.msg));
        }
        return dispatch(new LoginSuccess(response));
      })
    );
  }

  @Action(actions.LoginSuccess)
  LoginSuccess({patchState}: StateContext<State>, action: actions.LoginSuccess) {
    this.toastr.success('Login Success!', 'Login');
    patchState({
      pending: false,
      isLoggedIn: true,
      accessToken: action.payload.resultMap.accesstoken
    });
  }

  @Action(actions.LoginFailure)
  LoginFailure({ patchState }: StateContext<State>, action: actions.LoginFailure) {
    const error = action.payload;
    this.toastr.error(error, 'Login');
    patchState({
      pending: false,
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
          return dispatch(new SignUpFailure(response.msg));
        }
        return dispatch(new SignUpSuccess(response));
      })
    );
  }

  @Action(actions.SignUpSuccess)
  SignUpSuccess({patchState}: StateContext<State>, action: actions.SignUpSuccess) {
    this.toastr.success('SignUp Success!', 'SignUp');
    patchState({
      pending: false,
      isLoggedIn: true,
      accessToken: action.payload.resultMap.accesstoken
    });
  }

  @Action(actions.SignUpFailure)
  SignUpFailure({ patchState }: StateContext<State>, action: actions.SignUpFailure) {
    const error = action.payload;
    this.toastr.error(error, 'SignUp');
    patchState({
      pending: false,
      error
    });
  }

  @Action(actions.LoginWithLinkedIn)
  loginWithLinkedIn({ patchState, dispatch }: StateContext<State>, action: actions.LoginWithLinkedIn) {
    patchState({
      pending: true,
      error: null,
      isLoggedIn: false
    });

    return this.authService.loginWithLinkedIn(action.payload).pipe(
      exhaustMap((response: LoginResponse) => {
        if (response.code !== 0) {
          return dispatch(new LoginFailure(response.msg));
        }
        return dispatch(new LoginSuccess(response));
      })
    );
  }
}
