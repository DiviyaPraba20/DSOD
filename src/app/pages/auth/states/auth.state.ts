import { Router } from '@angular/router';
import { Action, State, StateContext, Store, Selector } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import * as actions from '../actions';
import { AuthService } from '../../../core/services/auth.service';
import { Response } from '../../../core/models';
import { of } from 'rxjs';
import { SignUpFailure } from '../actions/auth.actions';

export interface State {
  pending: boolean;
  error: any;
  isLoggedIn: boolean;
}

@State<State>({
  name: 'auth',
  defaults: {
    pending: false,
    error: null,
    isLoggedIn: false
  }
})

export class AuthState {
  @Selector() static isLoggedIn(state: State) { return state.isLoggedIn; }

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  @Action(actions.Login)
  login({ patchState }: StateContext<State>, action: actions.Login) {
    patchState({
      pending: true,
      error: null,
      isLoggedIn: false
    });

    return this.authService.login(action.payload).pipe(
      catchError((err: Response) => {
        this.toastr.error(err.msg, 'Login');
        patchState({
          pending: false,
          isLoggedIn: false,
          error: err.msg
        });
        throw(err);
      }),
      tap((result: Response) => {
        this.toastr.success('Login Success!', 'Login');
        this.router.navigate(['/']);
        patchState({
          pending: false,
          isLoggedIn: true,
          error: null
        });
      }
    ));
  }

  @Action(actions.SignUp)
  signUp({ patchState }: StateContext<State>, action: actions.SignUp) {
    patchState({
      pending: true,
      error: null,
      isLoggedIn: false
    });

    return this.authService.signup(action.payload).pipe(
      catchError((err: Response) => {
        this.toastr.error(err.msg, 'SignUp');
        patchState({
          pending: false,
          isLoggedIn: false,
          error: err.msg
        });
        throw(err);
      }),
      tap((result: Response) => {
        this.router.navigate(['/']);
        patchState({
          pending: false,
          isLoggedIn: true,
          error: null
        });
      }
    ));
  }
}
