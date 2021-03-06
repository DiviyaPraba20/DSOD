import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthState } from '../../pages/auth/states/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) { }

  get accessToken() {
    const token = this.store.selectSnapshot<string>(AuthState.accessToken);
    return token;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!!this.accessToken) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
  }
}
