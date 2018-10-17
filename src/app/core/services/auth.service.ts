import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { LoginPayload, LoginResponse, SignUpPayload, SignUpResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  get accessToken() {
    const token = this.localStorageService.get(environment.localStorage.accessToken) as string;
    return token ? token : '';
  }

  login(payload: LoginPayload): Observable<LoginResponse> {
    const url = `${environment.api}/profile/profileservice/v1/userAccount/login`;
    return this.http.post<LoginResponse>(url, payload).pipe(
      map((res: LoginResponse) => {
        this.localStorageService.set(environment.localStorage.accessToken, res.accesstoken);
        return res;
      })
    );
  }

  signup(payload: SignUpPayload): Observable<SignUpResponse> {
    const url = `${environment.api}/profile/profileservice/v1/userAccount/login`;
    return this.http.post<SignUpResponse>(url, payload).pipe(
      map((res: SignUpResponse) => {
        this.localStorageService.set(environment.localStorage.accessToken, res.accesstoken);
        return res;
      })
    );
  }

  logout() {
    this.localStorageService.clearAll();
    this.router.navigate(['login']);
  }
}
