import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginWithLinkedIn } from '../actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dsod-linkedin-callback',
  templateUrl: './linkedin-callback.component.html',
  styleUrls: ['./linkedin-callback.component.scss']
})
export class LinkedinCallbackComponent implements OnInit {
  authCode = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private store: Store
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.authCode = params.code;

      if (this.authCode) {
        this.spinner.show();
        this.store.dispatch(new LoginWithLinkedIn({
          code: this.authCode,
          redirectUrl: environment.LinkedIn.redirect_uri
        })).subscribe(res => {
          this.spinner.hide();
        });
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

}
