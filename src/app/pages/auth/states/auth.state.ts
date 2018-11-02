import { Action, State, StateContext, Store, Selector } from '@ngxs/store';
import { catchError, tap, map, exhaustMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import * as actions from '../actions';
import { AuthService } from '../../../core/services/auth.service';
import { UserProfileData } from '../../../layout/profile/models/userProfile';
import {
  LoginResponse,
  SignUpResponse,
  LoginWithLinkedInResponse,
  UserInfoResponse
} from '../../../core/models';
import {
  LoginFailure,
  LoginSuccess,
  SignUpSuccess,
  SignUpFailure,
  LoginWithLinkedInSuccess,
  LoginWithLinkedInFailure,
  GetUserInfoFailure,
  GetUserInfoSuccess
} from '../actions';

export interface State {
  pending: boolean;
  error: any;
  isLoggedIn: boolean;
  accessToken: string;
  isOpenedProfilePanel: boolean;
  userInfo: UserProfileData;
}

@State<State>({
  name: 'auth',
  defaults: {
    pending: false,
    error: null,
    isLoggedIn: false,
    accessToken: null,
    isOpenedProfilePanel: false,
    userInfo: null
  }
})

export class AuthState {
  @Selector() static isLoggedIn(state: State) { return state.isLoggedIn; }
  @Selector() static accessToken(state: State) { return state.accessToken; }
  @Selector() static isOpenedProfilePanel(state: State) { return state.isOpenedProfilePanel; }
  @Selector() static userInfo(state: State) { return state.userInfo; }

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
      accessToken: null
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
  LoginSuccess({ patchState }: StateContext<State>, action: actions.LoginSuccess) {
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
  SignUpSuccess({ patchState }: StateContext<State>, action: actions.SignUpSuccess) {
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

  @Action(actions.Logout)
  Logout({ patchState }: StateContext<State>, action: actions.Logout) {
    patchState({
      pending: false,
      error: null,
      isLoggedIn: false,
      isOpenedProfilePanel: false,
      accessToken: null
    });
    this.toastr.success('Logout Successfully!', 'Logout');
  }

  @Action(actions.LoginWithLinkedIn)
  loginWithLinkedIn({ patchState, dispatch }: StateContext<State>, action: actions.LoginWithLinkedIn) {
    patchState({
      pending: true,
      error: null,
      isLoggedIn: false
    });

    return this.authService.loginWithLinkedIn(action.payload).pipe(
      exhaustMap((response: LoginWithLinkedInResponse) => {
        if (response.code !== 0) {
          return dispatch(new LoginWithLinkedInFailure(response.msg));
        }
        return dispatch(new LoginWithLinkedInSuccess(response));
      })
    );
  }

  @Action(actions.LoginWithLinkedInSuccess)
  LoginWithLinkedInSuccess({ patchState }: StateContext<State>, action: actions.LoginWithLinkedInSuccess) {
    this.toastr.success('Login with LinkedIn Success!', 'SignUp');
    patchState({
      pending: false,
      isLoggedIn: true,
      accessToken: action.payload.resultMap.tokenValue
    });
  }

  @Action(actions.LoginWithLinkedInFailure)
  LoginWithLinkedInFailure({ patchState }: StateContext<State>, action: actions.LoginWithLinkedInFailure) {
    this.toastr.error(action.payload, 'SignUp');
    patchState({
      pending: false,
      error: action.payload
    });
  }

  @Action(actions.ToggleProfilePanel)
  ToggleProfilePanel({ patchState, getState }: StateContext<State>, action: actions.ToggleProfilePanel) {
    const currentState = getState();
    patchState({
      isOpenedProfilePanel: !currentState.isOpenedProfilePanel
    });
  }

  @Action(actions.GetUserInfo)
  getUserInfo({ patchState, dispatch }: StateContext<State>, action: actions.GetUserInfo) {
    patchState({
      pending: true,
      error: null,
      userInfo: null
    });

    return this.authService.getUserInfo(action.payload).pipe(
      exhaustMap((response: UserInfoResponse) => {
        if (response.code !== 0) {
          return dispatch(new GetUserInfoFailure(response.msg));
        }
        return dispatch(new GetUserInfoSuccess(response));
      })
    );
  }

  @Action(actions.GetUserInfoSuccess)
  getUserInfoSuccess({ patchState }: StateContext<State>, action: actions.GetUserInfoSuccess) {
    patchState({
      pending: false,
      userInfo: action.payload.resultMap.data
    });
  }

  @Action(actions.GetUserInfoFailure)
  getUserInfoFailure({ patchState }: StateContext<State>, action: actions.GetUserInfoFailure) {
    const error = action.payload;
    patchState({
      pending: false,
      userInfo: null,
      error
    });
  }
}
