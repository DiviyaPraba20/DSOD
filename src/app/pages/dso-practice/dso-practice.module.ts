import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { DSOPracticeRoutingModule } from './dso-practice-routing.module';
import { DSO_PRACTICES } from './components';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, DSOPracticeRoutingModule, SharedModule, TabsModule.forRoot()],
  declarations: [DSO_PRACTICES]
})
export class DSOPracticeModule {}
