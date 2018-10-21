import {
  LoginPayload,
  SignUpPayload,
  LoginResponse,
  SignUpResponse,
  LoginWithLinkedInPayload,
  LoginWithLinkedInResponse
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
  LoginWithLinkedinFailure = '[Auth] Login with LinkedIn Failure'
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
  | LoginWithLinkedInFailure;
