import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
import { OnScrollUpdateBgDirective } from './directives/update-nav-bg.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, NgbModule, NgSelectModule, SharedModule],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    DSODFooterComponent,
    SearchBoxDirective,
    ProfilePanelComponent,
    ProfileViewComponent,
    ProfileEditViewComponent,
    OnScrollUpdateBgDirective
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
