import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { COMMUNITY_COMPONENTS } from './components';
import { COMMUNITY_CONTAINERS } from './containers';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DSODUniteMagazineViewerComponent } from './components/unite-viewer/unite-viewer-modal.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [CommonModule, CommunityRoutingModule, NgbModule.forRoot(), NgxSpinnerModule],
  declarations: [COMMUNITY_COMPONENTS, COMMUNITY_CONTAINERS],
  entryComponents:[DSODUniteMagazineViewerComponent]
})
export class CommunityModule {}
