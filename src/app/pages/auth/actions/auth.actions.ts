import { LoginPayload, SignUpPayload, LoginResponse, SignUpResponse } from '../../../core/models/auth';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  SignUp = '[Auth] SignUp',
  SignUpSuccess = '[Auth] SignUp Success',
  SignUpFailure = '[Auth] SignUp Failure',
  Logout = '[Auth] Logout',
  Unauthorized = '[Auth] Unauthorized',
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

export type AuthActions = Login
  | LoginSuccess
  | LoginFailure
  | SignUp
  | SignUpSuccess
  | SignUpFailure
  | Unauthorized
  | Logout;
