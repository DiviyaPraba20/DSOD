import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './components/career/career.component';

@NgModule({
  imports: [
    CommonModule,
    CareerRoutingModule
  ],
  declarations: [CareerComponent]
})
export class CareerModule { }
