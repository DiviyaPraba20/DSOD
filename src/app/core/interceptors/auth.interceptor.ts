import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '../../pages/auth/states/auth.state';
import { Logout, Unauthorized } from '../../pages/auth/actions';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  // private accessToken: string = this.store.selectSnapshot<string>(AuthState.accessToken);

  constructor(
    private router: Router,
    private store: Store,
    private authService: AuthService
  ) {}

  applyAccessToken(request) {
    return request.clone({headers: request.headers.set('Authorization', `Bearer ${this.authService.accessToken}`), withCredentials: null});
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let duplicate = req;

    if (req.withCredentials) {
      if (!this.authService.accessToken) {
        this.store.dispatch(new Logout());
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
