import { Actions, ofActionDispatched, ofActionSuccessful } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppNavigate } from '../actions';
import { LoginSuccess, SignUpSuccess, Unauthorized } from '../pages/auth/actions';

@Injectable({providedIn: 'root'})
export class RouteHandler {
  constructor(private router: Router, private actions$: Actions) {
    this.actions$
      .pipe(ofActionDispatched(AppNavigate))
      .subscribe(({ payload }) => {
        return this.router.navigate([payload]);
      });
  }

  authSuccess$ = this.actions$.pipe(ofActionSuccessful(LoginSuccess, SignUpSuccess)).subscribe(({payload}) => {
    this.router.navigate(['/']);
  });

  unauthorized$ = this.actions$.pipe(ofActionDispatched(Unauthorized)).subscribe(({ payload }) => {
    this.router.navigate(['/login']);
  });
}
