import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualEssayRoutingModule } from './visual-essay-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ESSAY_COMPONENTS } from './components';
import { ESSAY_CONTAINERS } from './containers';

@NgModule({
  imports: [
    CommonModule,
    VisualEssayRoutingModule,
    SharedModule
  ],
  declarations: [...ESSAY_COMPONENTS, ...ESSAY_CONTAINERS]
})
export class VisualEssayModule { }
