import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './components/community/community.component';

@NgModule({
  imports: [
    CommonModule,
    CommunityRoutingModule
  ],
  declarations: [CommunityComponent]
})
export class CommunityModule { }
