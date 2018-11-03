import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '../../pages/auth/states/auth.state';
import { Logout, Unauthorized } from '../../pages/auth/actions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  private accessToken: string = this.store.selectSnapshot<string>(AuthState.accessToken);

  constructor(
    private router: Router,
    private store: Store
  ) {}

  exclude = ['login', 'register'];

  applyAccessToken(request) {
    return request.clone({headers: request.headers.set('Authorization', `Bearer ${this.accessToken}`), withCredentials: null});
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let duplicate = req;
    if (!req || !req.url.startsWith(environment.url) || req.url.endsWith('register') || req.url.endsWith('login')) {
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json');
      req = req.clone({
        headers
      });

      return next.handle(req);
    }
    if (req.withCredentials) {
      if (!this.accessToken) {
        this.store.dispatch(new Unauthorized());
        return throwError({message: 'Current Session has been expired. Please login again.'});
      }
      duplicate = this.applyAccessToken(req);
    }

    return next.handle(duplicate).pipe(
      catchError(error => {
        if (error.status === 401) {
          this.store.dispatch(new Logout());
        }
        return throwError(error);
      })
    );
  }
}
