import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { LoginPayload, LoginResponse, SignUpPayload, SignUpResponse, Response } from '../models';
import { handleAPIResponse } from '../functions/common.function';

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
        if (res.code === 0) {
          this.localStorageService.set(environment.localStorage.accessToken, res.resultMap.accessToken);
        }
        return res;
      })
    );
  }

  signup(payload: SignUpPayload): Observable<Response> {
    const url = `${environment.api}/profile/profileservice/v1/userAccount/register`;
    return this.http.post<Response>(url, payload).pipe(
      // map((res: Response) => {
      //   return handleAPIResponse(res);
      // }),
      tap(res => {
        if (res.code === 0) {
          this.localStorageService.set(environment.localStorage.accessToken, res.resultMap.accessToken);
        }
      })
    );
  }

  logout() {
    this.localStorageService.clearAll();
    this.router.navigate(['login']);
  }
}
