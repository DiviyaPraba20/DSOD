import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';

import { environment } from '../../../environments/environment';
import { LoginPayload, LoginResponse, SignUpPayload, Response, SignUpResponse } from '../models';

import { Store } from '@ngxs/store';
import { Logout } from 'src/app/pages/auth/actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
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

  logout() {
    return this.store.dispatch(new Logout());
  }
}
