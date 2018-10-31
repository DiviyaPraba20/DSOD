import { Response } from './common';

export interface LoginPayload {
  username: string;
  password: string;
  client_id: string;
}

export interface LoginResponse extends Response {
  resultMap: {accesstoken: string; };
}

export interface SignUpPayload {
  full_name: string;
  username: string;
  password: string;
  is_student: string;
  client_id: string;
}

export interface SignUpResponse extends Response {
  resultMap: {accesstoken: string; };
}

export interface LoginWithLinkedInPayload {
  code: string;
  redirectUrl: string;
}

export interface LoginWithLinkedInResponse extends Response {
  resultMap: {
    email: string;
    tokenValue: string;
  };
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  email_token: string;
  username: string;
  password: string;
}

export interface UserInfoPayload {
  details: any;
  authenticated: boolean;
  email: string;
}

export interface UserInfoResponse extends Response {
  resultMap: any;
}
