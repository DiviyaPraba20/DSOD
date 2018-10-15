import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar/services';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [CommonModule, RouterModule, BsDropdownModule.forRoot()],
  declarations: [LayoutComponent, NavbarComponent],
  exports: [NavbarComponent],
  providers: [NavbarService]
})
export class LayoutModule {}
