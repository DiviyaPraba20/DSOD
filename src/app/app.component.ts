import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { Store } from '@ngxs/store';

import * as actions from './actions';
import { ApplicationStateService } from './app.service';

@Component({
  selector: 'dsod-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'DSODDesktop';
  isPreview = false;

  constructor(
    private store: Store,
    private service: ApplicationStateService,
    private router: Router,
    private location: LocationStrategy
  ) {
    this.service.getIsMobileResolution();
    this.store.dispatch(new actions.AppInit());

    this.location.onPopState(() => {
      this.service.setBackClicked(true);
      return false;
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe(res => {
        this.router.url.includes('preview')
          ? (this.isPreview = true)
          : (this.isPreview = false);
      });
  }
}
