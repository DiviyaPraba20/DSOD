import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopmentRoutingModule } from './development-routing.module';
import { DevelopmentComponent } from './components/development/development.component';

@NgModule({
  imports: [
    CommonModule,
    DevelopmentRoutingModule
  ],
  declarations: [DevelopmentComponent]
})
export class DevelopmentModule { }
