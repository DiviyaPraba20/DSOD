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
import { OnScrollUpdateBgDirective } from './directives/update-nav-bg.directive';
import { DSODSearchComponent } from './search/search-input/search-input.component';
import { DSODSearchResults } from './search/search-results/search-results.component';
import { DSODSearchItemComponent } from './search/search-item/search-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GoTopButtonModule } from 'ng2-go-top-button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PaginationModule.forRoot(),
    NgxSpinnerModule,
    BrowserAnimationsModule,
    GoTopButtonModule
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
  providers: [NavbarService]
})
export class LayoutModule {}
