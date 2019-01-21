import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { EVENTS_CONTAINERS } from './containers';
import { EVENTS_COMPONENTS } from './components';
import { EventsRoutingModule } from './events-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DSODCreateEventComponent } from './components/create-event/create-event.component';
import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, EventsRoutingModule, NgbModule, BsDatepickerModule.forRoot()],
  declarations: [...EVENTS_CONTAINERS, ...EVENTS_COMPONENTS],
  entryComponents: [DSODCreateEventComponent]
})
export class EventsModule {}
