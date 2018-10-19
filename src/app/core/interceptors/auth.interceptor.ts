import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { Response } from '../models/common';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  applyAccessToken(request) {
    return request.clone({headers: request.headers.set('Authorization', `Bearer ${this.authService.accessToken}`)});
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let duplicate = req;

    if (req.withCredentials) {
      if (!this.authService.accessToken) {
        this.router.navigate(['/login']);
        return throwError({message: 'Current Session has been expired. Please login again.'});
      }
      duplicate = this.applyAccessToken(req);
    }

    return next.handle(duplicate).pipe(
      catchError(error => {
        if (error.status === 401) {
          this.authService.logout();
        }
        return throwError(error);
      })
    );
  }
}
