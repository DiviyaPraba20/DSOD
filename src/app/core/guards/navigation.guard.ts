import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplicationStateService } from '../../app.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationGuard implements CanActivate {
  constructor(
    private appService: ApplicationStateService,
    private authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.appService.getBackClicked() && this.authService.isLoggedIn) {
        this.appService.setBackClicked(false);
        if (state.url === '/login') {
          history.pushState(null, null, null);
          return false;
        }
      }
      return true;
  }
}
