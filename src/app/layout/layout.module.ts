import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ClickOutsideModule } from 'ng-click-outside';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgxSpinnerModule } from 'ngx-spinner';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar/services';
import { DSODFooterComponent } from './footer/footer.component';
import { SearchBoxDirective } from './directives/search-box.directive';
import { ProfilePanelComponent } from './profile/profile-panel/profile-panel.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileEditViewComponent } from './profile/profile-edit-view/profile-edit-view.component';
import { OnScrollUpdateBgDirective } from './directives/update-nav-bg.directive';
import { SharedModule } from '../shared/shared.module';
import { ProfileEducationComponent } from './profile/profile-education/profile-education.component';
import { AuthService } from '../core/services/auth.service';
import { ProfileExperienceComponent } from './profile/profile-experience/profile-experience.component';
import { ProfileResidencyComponent } from './profile/profile-residency/profile-residency.component';
import { ProfileAddressComponent } from './profile/profile-address/profile-address.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    ClickOutsideModule,
    SharedModule,
    UiSwitchModule,
    NgxSpinnerModule
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    DSODFooterComponent,
    SearchBoxDirective,
    ProfilePanelComponent,
    ProfileViewComponent,
    ProfileEditViewComponent,
    OnScrollUpdateBgDirective,
    ProfileEducationComponent,
    ProfileExperienceComponent,
    ProfileResidencyComponent,
    ProfileAddressComponent
  ],
  exports: [
    NavbarComponent,
    DSODFooterComponent,
    SearchBoxDirective,
    ProfilePanelComponent
  ],
  providers: [NavbarService, AuthService]
})
export class LayoutModule {}
