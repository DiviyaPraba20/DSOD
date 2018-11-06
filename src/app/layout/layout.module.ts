import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar/services';
import { DSODFooterComponent } from './footer/footer.component';
import { SearchBoxDirective } from './directives/search-box.directive';
import { ProfilePanelComponent } from './profile/profile-panel/profile-panel.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileEditViewComponent } from './profile/profile-edit-view/profile-edit-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgSelectModule
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    DSODFooterComponent,
    SearchBoxDirective,
    ProfilePanelComponent,
    ProfileViewComponent,
    ProfileEditViewComponent
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
