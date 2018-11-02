import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'dsod-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.loggedIn = this.store.select(state => state.auth.isLoggedIn);
  }
}
