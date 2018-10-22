import { Component, OnInit } from '@angular/core';
import { NavbarService } from './services';
import { Navigation } from './models';

@Component({
  selector: 'dsod-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navigation: Navigation[];

  constructor(private service:NavbarService) { }

  ngOnInit() {
    this.navigation = this.service.getNavItems();
  }

}
