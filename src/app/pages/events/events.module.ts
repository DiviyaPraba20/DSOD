import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { EVENTS_CONTAINERS } from './containers';
import { EVENTS_COMPONENTS } from './components';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, EventsRoutingModule],
  declarations: [...EVENTS_CONTAINERS, ...EVENTS_COMPONENTS]
})
export class EventsModule {}
