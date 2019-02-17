import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ClickOutsideModule } from 'ng-click-outside';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ShareModule } from '@ngx-share/core';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar/services';
import { DSODFooterComponent } from './footer/footer.component';
import { SearchBoxDirective } from './directives/search-box.directive';
import { ProfilePanelComponent } from './profile/profile-panel/profile-panel.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileEditViewComponent } from './profile/profile-edit-view/profile-edit-view.component';
import { OnScrollUpdateBgDirective } from './directives/update-nav-bg.directive';
import { DSODSearchComponent } from './search/search-input/search-input.component';
import { DSODSearchResults } from './search/search-results/search-results.component';
import { DSODSearchItemComponent } from './search/search-item/search-item.component';
import { SharedModule } from '../shared/shared.module';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { AuthService } from '../core/services/auth.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CommonModule,
    RouterModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    GoTopButtonModule,
    ClickOutsideModule,
    UiSwitchModule,
    ShareModule
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
    DSODSearchResults,
    DSODSearchComponent,
    DSODSearchItemComponent
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
