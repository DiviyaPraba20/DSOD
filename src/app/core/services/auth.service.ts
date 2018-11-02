import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Store } from '@ngxs/store';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../../environments/environment';
import {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse,
  LoginWithLinkedInPayload,
  LoginWithLinkedInResponse,
  ForgotPasswordPayload,
  ResetPasswordPayload
} from '../models';
import { Response } from '../models/common';
import { Logout } from 'src/app/pages/auth/actions';
import { UserInfoPayload } from '../models/auth';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(this.isLoggedIn);

  constructor(
    private http: HttpClient,
    private store: Store,
    private localStorageService: LocalStorageService
  ) { }

  get accessToken() {
    return this.localStorageService.get(environment.localStorage.accessToken) as string;
  }

  get isLoggedIn() {
    return !!this.localStorageService.get(environment.localStorage.accessToken);
  }

  getUserInfoFromToken() {
    const userInfo = this.jwtHelper.decodeToken(this.accessToken);
    return userInfo || {};
  }

  parseFormData(data: any) {
    const formData: FormData = new FormData();
    Object.keys(data).map((key: any) => {
      formData.append(key, data[key]);
    });
    return formData;
  }

  login(payload: LoginPayload): Observable<LoginResponse> {
    const url = `${environment.api}/profile/profileservice/v1/userAccount/login`;
    return this.http.post<LoginResponse>(url, payload);
  }

  signup(payload: SignUpPayload): Observable<SignUpResponse> {
    const url = `${environment.api}/profile/profileservice/v1/userAccount/register`;
    return this.http.post<SignUpResponse>(url, payload);
  }

  loginWithLinkedIn(payload: LoginWithLinkedInPayload): Observable<LoginWithLinkedInResponse> {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('code', payload.code);
    body = body.set('redirectUrl', payload.redirectUrl);

    const url = `${environment.api}/profile/profileservice/v1/linkedInLoginOther`;
    return this.http.post<LoginWithLinkedInResponse>(url, body, {headers: myheader});
  }

  logout() {
    return this.store.dispatch(new Logout());
  }

  forgotPassword(payload: ForgotPasswordPayload): Observable<Response> {
    const header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('email', payload.email);

    const url = `${environment.api}/profile/profileservice/v1/emailToken/sendEmail`;
    return this.http.post<Response>(url, body, {headers: header});
  }

  resetPassword(payload: ResetPasswordPayload): Observable<Response> {
    const url = `${environment.api}/profile/profileservice/v1/userAccount/resetPassWord`;
    return this.http.post<Response>(url, payload);
  }

  getUserInfo(payload: UserInfoPayload): Observable<Response> {
    const url = `${environment.api}/profile/profileservice/v1/userProfile/findOneByEmail`;
    const formData = this.parseFormData(payload);
    return this.http.post<Response>(url, formData, {withCredentials: true});
  }
}
