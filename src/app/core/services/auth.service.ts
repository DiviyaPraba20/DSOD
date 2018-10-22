import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { environment } from '../../../environments/environment';
import {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse,
  LoginWithLinkedInPayload,
  LoginWithLinkedInResponse
} from '../models';
import { Logout } from 'src/app/pages/auth/actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

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
}
