import { Response } from './common';

export interface LoginPayload {
  username: string;
  password: string;
  client_id: string;
}

export interface LoginResponse extends Response {
  accesstoken: string;
}

export interface SignUpPayload {
  full_name: string;
  username: string;
  password: string;
  is_student: string;
  client_id: string;
}

export interface SignUpResponse extends Response {
  accesstoken: string;
}

export interface LoginWithLinkedInPayload {
  code: string;
  redirectUrl: string;
}
