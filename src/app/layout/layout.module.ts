import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar/services';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DSODFooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule, BsDropdownModule.forRoot()],
  declarations: [LayoutComponent, NavbarComponent, DSODFooterComponent],
  exports: [NavbarComponent, DSODFooterComponent],
  providers: [NavbarService]
})
export class LayoutModule {}
