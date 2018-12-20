import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { DSOPracticeRoutingModule } from './dso-practice-routing.module';
import { DSO_PRACTICES_COMPONENTS } from './components';
import { SharedModule } from 'src/app/shared/shared.module';
import { DSO_PRACTICE_CONTAINERS } from './containers';

@NgModule({
  imports: [CommonModule, DSOPracticeRoutingModule, SharedModule, TabsModule.forRoot()],
  declarations: [DSO_PRACTICES_COMPONENTS, DSO_PRACTICE_CONTAINERS]
})
export class DSOPracticeModule {}
