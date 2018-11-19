import { UserProfileData } from '../../../layout/profile/models/userProfile';
import {
  LoginPayload,
  SignUpPayload,
  LoginResponse,
  SignUpResponse,
  LoginWithLinkedInPayload,
  LoginWithLinkedInResponse,
  UserInfoPayload,
  UserInfoResponse
} from '../../../core/models/auth';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  SignUp = '[Auth] SignUp',
  SignUpSuccess = '[Auth] SignUp Success',
  SignUpFailure = '[Auth] SignUp Failure',
  Logout = '[Auth] Logout',
  Unauthorized = '[Auth] Unauthorized',
  LoginWithLinkedin = '[Auth] Login with LinkedIn',
  LoginWithLinkedinSuccess = '[Auth] Login with LinkedIn Success',
  LoginWithLinkedinFailure = '[Auth] Login with LinkedIn Failure',
  GetUserInfo = '[Auth] Get UserInfo',
  GetUserInfoSuccess = '[Auth] Get UserInfo Success',
  GetUserInfoFailure = '[Auth] Get UserInfo Failure',
  UpdateUserInfo = '[Auth] Update UserInfo',
  UpdateUserInfoSuccess = '[Auth] Update UserInfo Success',
  UpdateUserInfoFailure = '[Auth] Update UserInfo Failure',
  UpdateUserAvatar = '[Auth] Update User Avatar',
  UpdateUserAvatarSuccess = '[Auth] Update Avatar Success',
  UpdateUserAvatarFailure = '[Auth] Update Avatar Failure',
  RemoveResume = '[Auth] Remove Resume',
  RemoveResumeSuccess = '[Auth] Remove Resume Success',
  RemoveResumeFailure = '[Auth] Remove Resume Failure'
}

export class Login {
  static readonly type = AuthActionTypes.Login;

  constructor(public payload: LoginPayload) {}
}

export class LoginSuccess {
  static readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: LoginResponse) {}
}

export class LoginFailure {
  static readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload?: any) {}
}

export class SignUp {
  static readonly type = AuthActionTypes.SignUp;

  constructor(public payload: SignUpPayload) {}
}

export class SignUpSuccess {
  static readonly type = AuthActionTypes.SignUpSuccess;

  constructor(public payload: SignUpResponse) {}
}

export class SignUpFailure {
  static readonly type = AuthActionTypes.SignUpFailure;

  constructor(public payload?: any) {}
}

export class Logout {
  static readonly type = AuthActionTypes.Logout;
}

export class Unauthorized {
  static readonly type = AuthActionTypes.Unauthorized;
}

export class LoginWithLinkedIn {
  static readonly type = AuthActionTypes.LoginWithLinkedin;

  constructor(public payload: LoginWithLinkedInPayload) {}
}

export class LoginWithLinkedInSuccess {
  static readonly type = AuthActionTypes.LoginWithLinkedinSuccess;

  constructor(public payload: LoginWithLinkedInResponse) {}
}

export class LoginWithLinkedInFailure {
  static readonly type = AuthActionTypes.LoginWithLinkedinFailure;

  constructor(public payload?: any) {}
}

export class GetUserInfo {
  static readonly type = AuthActionTypes.GetUserInfo;

  constructor(public payload: UserInfoPayload) {}
}

export class GetUserInfoSuccess {
  static readonly type = AuthActionTypes.GetUserInfoSuccess;

  constructor(public payload: UserInfoResponse) {}
}

export class GetUserInfoFailure {
  static readonly type = AuthActionTypes.GetUserInfoFailure;

  constructor(public payload?: any) {}
}

export class UpdateUserInfo {
  static readonly type = AuthActionTypes.UpdateUserInfo;

  constructor(public payload: UserProfileData) {}
}

export class UpdateUserInfoSuccess {
  static readonly type = AuthActionTypes.UpdateUserInfoSuccess;

  constructor(public payload: UserInfoResponse) {}
}

export class UpdateUserInfoFailure {
  static readonly type = AuthActionTypes.UpdateUserInfoFailure;

  constructor(public payload?: any) {}
}

export class UpdateUserAvatar {
  static readonly type = AuthActionTypes.UpdateUserAvatar;

  constructor(public payload: File) {}
}

export class UpdateUserAvatarSuccess {
  static readonly type = AuthActionTypes.UpdateUserAvatarSuccess;

  constructor(public payload: UserInfoResponse) {}
}

export class UpdateUserAvatarFailure {
  static readonly type = AuthActionTypes.UpdateUserAvatarFailure;

  constructor(public payload?: any) {}
}

export class RemoveResume {
  static readonly type = AuthActionTypes.RemoveResume;
}

export class RemoveResumeSuccess {
  static readonly type = AuthActionTypes.RemoveResumeSuccess;

  constructor(public payload: UserInfoResponse) {}
}

export class RemoveResumeFailure {
  static readonly type = AuthActionTypes.RemoveResumeFailure;

  constructor(public payload?: any) {}
}

export type AuthActions = Login
  | LoginSuccess
  | LoginFailure
  | SignUp
  | SignUpSuccess
  | SignUpFailure
  | Logout
  | Unauthorized
  | LoginWithLinkedIn
  | LoginWithLinkedInSuccess
  | LoginWithLinkedInFailure
  | GetUserInfo
  | GetUserInfoSuccess
  | GetUserInfoFailure
  | UpdateUserInfo
  | UpdateUserInfoSuccess
  | UpdateUserInfoFailure
  | UpdateUserAvatar
  | UpdateUserAvatarSuccess
  | UpdateUserAvatarFailure
  | RemoveResume
  | RemoveResumeSuccess
  | RemoveResumeFailure;
