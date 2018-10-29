import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar/services';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DSODFooterComponent } from './footer/footer.component';
import { SearchBoxDirective } from './directives/search-box.directive';
import { ProfilePanelComponent } from './profile-panel/profile-panel.component';

@NgModule({
  imports: [CommonModule, RouterModule, BsDropdownModule.forRoot()],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    DSODFooterComponent,
    SearchBoxDirective,
    ProfilePanelComponent
  ],
  exports: [
    NavbarComponent,
    DSODFooterComponent,
    SearchBoxDirective,
    ProfilePanelComponent
  ],
  providers: [NavbarService]
})
export class LayoutModule {}
