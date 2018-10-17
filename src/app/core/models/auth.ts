import { Response } from './common';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse extends Response {
  accesstoken: string;
}

export interface SignUpPayload {
  userName: string;
  email: string;
  password: string;
}

export interface SignUpResponse extends Response {
  accesstoken: string;
}
