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
  ResetPasswordPayload,
  ProfileTypesResponse
} from '../models';
import { Response } from '../models/common';
import { Logout } from 'src/app/pages/auth/actions';
import { UserInfoPayload } from '../models/auth';
import { AuthState } from 'src/app/pages/auth/states/auth.state';
import { UserProfileData } from '../../layout/profile/models/userProfile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  isLoggedIn$ = this.store.select(AuthState.isLoggedIn);

  constructor(
    private http: HttpClient,
    private store: Store
  ) {
  }

  get accessToken() {
    const token = this.store.selectSnapshot<string>(AuthState.accessToken);
    return token;
  }

  get isLoggedIn() {
    const loggedIn = this.store.selectSnapshot<boolean>(AuthState.isLoggedIn);
    return loggedIn;
  }

  getUserInfoFromToken() {
    if (this.accessToken) {
      const userInfo = this.jwtHelper.decodeToken(this.accessToken);
      return userInfo || {};
    }
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

  updateUserInfo(payload: UserProfileData): Observable<Response> {
    const url = `${environment.api}/profile/profileservice/v1/userProfile/save`;
    return this.http.post<Response>(url, payload, {withCredentials: true});
  }

  getAllSpeciality(): Observable<ProfileTypesResponse> {
    const url = `${environment.api}/profile/profileservice/v1/residencySpecialty/findAllSpecialty`;
    const formData = this.parseFormData({ name: '' });
    return this.http.post<ProfileTypesResponse>(url, formData, {withCredentials: true});
  }

  getAllPracticeTypes(): Observable<ProfileTypesResponse> {
    const url = `${environment.api}/profile/profileservice/v1/experience/findAllPracticeType`;
    const formData = this.parseFormData({ name: '' });
    return this.http.post<ProfileTypesResponse>(url, formData, {withCredentials: true});
  }

  getAllPracticeRoles(): Observable<ProfileTypesResponse> {
    const url = `${environment.api}/profile/profileservice/v1/experience/findAllPracticeRole`;
    const formData = this.parseFormData({ name: '' });
    return this.http.post<ProfileTypesResponse>(url, formData, {withCredentials: true});
  }

  getAllPracticeDSO(): Observable<ProfileTypesResponse> {
    const url = `${environment.api}/profile/profileservice/v1/experience/findAllPracticeDSO`;
    const formData = this.parseFormData({ name: '' });
    return this.http.post<ProfileTypesResponse>(url, formData, {withCredentials: true});
  }

  getAllResidencies(): Observable<ProfileTypesResponse> {
    const url = `${environment.api}/profile/profileservice/v1/residencySpecialty/findAllResidency`;
    const formData = this.parseFormData({ name: '' });
    return this.http.post<ProfileTypesResponse>(url, formData, {withCredentials: true});
  }

  getAllDentalSchools(): Observable<ProfileTypesResponse> {
    const url = `${environment.api}/profile/profileservice/v1/dentalSchool/getAll`;
    const formData = this.parseFormData({ name: '' });
    return this.http.post<ProfileTypesResponse>(url, formData, {withCredentials: true});
  }

  getAllUSStates(): Observable<ProfileTypesResponse> {
    const url = `${environment.api}/profile/profileservice/v1/usZipSv/findAllStateByState`;
    const formData = this.parseFormData({ state: '' });
    return this.http.post<ProfileTypesResponse>(url, formData, {withCredentials: true});
  }

  uploadUserAvatar(f: any): Observable<ProfileTypesResponse> {
    const form = new FormData();
    form.append('file', f);
    const url = `${environment.api}/profile/profileservice/v1/photoUpload`;
    const formData = this.parseFormData({ state: '' });
    return this.http.post<ProfileTypesResponse>(url, form, {withCredentials: true});
  }

}
