import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'dsod-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() { }
}
