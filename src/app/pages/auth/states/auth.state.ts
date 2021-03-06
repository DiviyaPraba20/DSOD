import { Action, State, StateContext, Store, Selector } from '@ngxs/store';
import { exhaustMap } from 'rxjs/operators';
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
  GetUserInfoSuccess,
  UpdateUserInfoSuccess,
  UpdateUserInfoFailure,
  UpdateUserAvatar,
  UpdateUserAvatarSuccess,
  UpdateUserAvatarFailure,
  UpdateUserInfo,
  RemoveResume,
  RemoveResumeFailure,
  RemoveResumeSuccess,
  GetUserInfo
} from '../actions';

export interface State {
  pending: boolean;
  error: any;
  isLoggedIn: boolean;
  accessToken: string;
  userInfo: UserProfileData;
}

@State<State>({
  name: 'auth',
  defaults: {
    pending: false,
    error: null,
    isLoggedIn: false,
    accessToken: null,
    userInfo: null
  }
})

export class AuthState {
  @Selector() static isLoggedIn(state: State) { return state.isLoggedIn; }
  @Selector() static accessToken(state: State) { return state.accessToken; }
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
      accessToken: null
    });
    if (action.showMsg) {
      this.toastr.success('Logout Successfully!', 'Logout');
    }
  }

  @Action(actions.Unauthorized)
  Unauthorized({ patchState }: StateContext<State>, action: actions.Unauthorized) {
    patchState({
      pending: false,
      error: null,
      isLoggedIn: false,
      accessToken: null
    });
    this.toastr.error('Current Session has been expired. Please login again.', 'Logout');
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

  @Action(actions.GetUserInfo)
  getUserInfo({ patchState, dispatch }: StateContext<State>, action: actions.GetUserInfo) {
    patchState({
      pending: true,
      error: null
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

  @Action(actions.UpdateUserInfo)
  updateUserInfo({ patchState, dispatch }: StateContext<State>, action: actions.UpdateUserInfo) {
    patchState({
      pending: true,
      error: null
    });

    return this.authService.updateUserInfo(action.payload).pipe(
      exhaustMap((response: UserInfoResponse) => {
        if (response.code !== 0) {
          return dispatch(new UpdateUserInfoFailure(response.msg));
        }
        return dispatch(new UpdateUserInfoSuccess(response));
      })
    );
  }

  @Action(actions.UpdateUserInfoSuccess)
  updateUserInfoSuccess({ patchState, getState }: StateContext<State>, action: actions.UpdateUserInfoSuccess) {
    this.toastr.success('User Info updated successfully!', 'UserInfo');
    patchState({
      pending: false
    });
    const currentState = getState();
    this.store.dispatch(new GetUserInfo({email: currentState.userInfo.email}));
  }

  @Action(actions.UpdateUserInfoFailure)
  updateUserInfoFailure({ patchState }: StateContext<State>, action: actions.UpdateUserInfoFailure) {
    const error = action.payload;
    this.toastr.error(action.payload, 'UserInfo');
    patchState({
      pending: false,
      error
    });
  }

  @Action(actions.UpdateUserAvatar)
  updateUserAvatar({ patchState, dispatch }: StateContext<State>, action: actions.UpdateUserAvatar) {
    patchState({
      pending: true,
      error: null
    });

    return this.authService.uploadUserAvatar(action.payload).pipe(
      exhaustMap((response: UserInfoResponse) => {
        if (response.code !== 0) {
          return dispatch(new UpdateUserAvatarFailure(response.msg));
        }
        return dispatch(new UpdateUserAvatarSuccess(response));
      })
    );
  }

  @Action(actions.UpdateUserAvatarSuccess)
  updateUserAvatarSuccess({ patchState, dispatch, getState }: StateContext<State>, action: actions.UpdateUserAvatarSuccess) {
    this.toastr.success('User photo has been uploaded successfully!', 'UserInfo');
    const currentState = getState();
    if (action.payload['code'] === 0) {
      currentState.userInfo.photo_album = {
        id: null,
        photo: '',
        photo_name: action.payload['resultMap']['photoName'],
        create_time: null,
        email: null,
        user_id: null
      };
    }
    patchState({
      pending: false
    });
    // return dispatch(new UpdateUserInfo(currentState.userInfo));
  }

  @Action(actions.UpdateUserAvatarFailure)
  updateUserAvatarFailure({ patchState }: StateContext<State>, action: actions.UpdateUserAvatarFailure) {
    const error = action.payload;
    this.toastr.error(action.payload, 'UserInfo');
    patchState({
      pending: false,
      error
    });
  }

  @Action(actions.RemoveResume)
  removeResume({ patchState, dispatch }: StateContext<State>, action: actions.RemoveResume) {
    patchState({
      pending: true,
      error: null
    });

    return this.authService.deleteDocumentByEmail().pipe(
      exhaustMap((response: UserInfoResponse) => {
        if (response.code !== 0) {
          return dispatch(new RemoveResumeFailure(response.msg));
        }
        return dispatch(new RemoveResumeSuccess(response));
      })
    );
  }

  @Action(actions.RemoveResumeSuccess)
  removeResumeSuccess({ patchState, dispatch, getState }: StateContext<State>, action: actions.RemoveResumeSuccess) {
    this.toastr.success('Resume has been deleted successfully!', 'UserInfo');
    const currentState = getState();
    if (action.payload['code'] === 0) {
      currentState.userInfo.document_library = null;
    }
    patchState({
      pending: false
    });
  }

  @Action(actions.RemoveResumeFailure)
  removeResumeFailure({ patchState }: StateContext<State>, action: actions.RemoveResumeFailure) {
    const error = action.payload;
    this.toastr.error(action.payload, 'UserInfo');
    patchState({
      pending: false,
      error
    });
  }
}
