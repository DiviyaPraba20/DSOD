import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import {  of, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Select, Store } from '@ngxs/store';

import { Logout, Unauthorized } from '../../pages/auth/actions';
import { ApplicationStateService } from '../../app.service';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private store: Store,
    private appService: ApplicationStateService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          const body = err.error;
          const {status, statusText} = err;
          if (err.status === 401) {
            this.appService._unsubscribeAll.next();
            this.appService._unsubscribeAll.complete();
            this.store.dispatch(new Logout());
            this.router.navigate(['login']);
          } else {
            if (err.status >= 200 && err.status < 500) {
              return of(new HttpResponse({ body: body, status, statusText}));
            }
          }
        }

        // ...optionally return a default fallback value so app can continue (pick one)
        // which could be a default value (which has to be a HttpResponse here)
        // return Observable.of(new HttpResponse({body: [{name: "Default value..."}]}));
        // or simply an empty observable
        return throwError(err);
      }));
  }
}
