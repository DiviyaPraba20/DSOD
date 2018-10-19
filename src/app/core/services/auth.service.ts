import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { LoginPayload, SignUpPayload, Response, LoginWithLinkedInPayload } from '../models';
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

  login(payload: LoginPayload): Observable<Response> {
    const url = `${environment.api}/profile/profileservice/v1/userAccount/login`;
    return this.http.post<Response>(url, payload).pipe(
      map((res: Response) => {
        return handleAPIResponse(res);
      }),
      tap(res => {
        this.localStorageService.set(environment.localStorage.accessToken, res.resultMap.accessToken);
      })
    );
  }

  signup(payload: SignUpPayload): Observable<Response> {
    const url = `${environment.api}/profile/profileservice/v1/userAccount/register`;
    return this.http.post<Response>(url, payload).pipe(
      map((res: Response) => {
        return handleAPIResponse(res);
      }),
      tap(res => {
        this.localStorageService.set(environment.localStorage.accessToken, res.resultMap.accessToken);
      })
    );
  }

  loginWithLinkedIn(payload: LoginWithLinkedInPayload): Observable<Response> {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('code', payload.code);
    body = body.set('redirectUrl', payload.redirectUrl);

    const url = `${environment.api}/profile/profileservice/v1/linkedInLoginOther`;
    return this.http.post<Response>(url, body, {headers: myheader}).pipe(
      map((res: Response) => {
        return handleAPIResponse(res);
      }),
      tap(res => {
        this.localStorageService.set(environment.localStorage.accessToken, res.resultMap.tokenValue);
      })
    );
  }

  logout() {
    this.localStorageService.clearAll();
    this.router.navigate(['login']);
  }
}
