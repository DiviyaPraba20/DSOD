import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { COMMUNITY_COMPONENTS } from './components';

@NgModule({
  imports: [CommonModule, CommunityRoutingModule],
  declarations: [COMMUNITY_COMPONENTS]
})
export class CommunityModule {}
