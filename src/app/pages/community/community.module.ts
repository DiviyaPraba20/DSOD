import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommunityRoutingModule } from './community-routing.module';
import { DSODUniteMagazineViewerComponent } from './components/unite-viewer/unite-viewer-modal.component';
import { CommunityContainerComponent } from './containers/community-container.component';
import { DSODUniteMagazinePageComponent } from './components/unite-magazine/unite-magazine.component';
import { DSODCommunityComponent } from './components/community/community.component';

@NgModule({
  imports: [
    CommonModule,
    CommunityRoutingModule,
    NgbModule.forRoot(),
    NgxSpinnerModule
  ],
  declarations: [
    DSODUniteMagazinePageComponent,
    DSODUniteMagazineViewerComponent,
    CommunityContainerComponent,
    DSODCommunityComponent
  ],
  entryComponents: [
    DSODUniteMagazineViewerComponent
  ]
})
export class CommunityModule {}
