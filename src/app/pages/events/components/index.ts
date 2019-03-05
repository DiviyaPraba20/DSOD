import { DSODEventCardComponent } from './card/event-card.component';
import { DSODEventTrainingComponent } from './training/training.component';
import { DSODCreateEventComponent } from './create-event/create-event.component';

export * from './card/event-card.component';
export * from './training/training.component';

export const EVENTS_COMPONENTS = [
  DSODEventCardComponent,
  DSODEventTrainingComponent,
  DSODCreateEventComponent
];
