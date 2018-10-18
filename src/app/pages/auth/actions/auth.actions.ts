import { LoginPayload, SignUpPayload } from '../../../core/models/auth';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  SignUp = '[Auth] SignUp',
  SignUpSuccess = '[Auth] SignUp Success',
  SignUpFailure = '[Auth] SignUp Failure',
  Logout = '[Auth] Logout',
}

export class Login {
  static readonly type = AuthActionTypes.Login;

  constructor(public payload: LoginPayload) {}
}

export class SignUp {
  static readonly type = AuthActionTypes.SignUp;

  constructor(public payload: SignUpPayload) {}
}

export class Logout {
  static readonly type = AuthActionTypes.Logout;
}

export type AuthActions = Login
  | SignUp
  | Logout;
