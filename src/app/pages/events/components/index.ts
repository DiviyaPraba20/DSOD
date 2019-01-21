import { DSODEventCardComponent } from './card/event-card.component';
import { DSODEventSlideComponent } from './slide/event-slide.component';
import { DSODEventTrainingComponent } from './training/training.component';
import { DSODCreateEventComponent } from './create-event/create-event.component';

export * from './card/event-card.component';
export * from './slide/event-slide.component';
export * from './training/training.component';

export const EVENTS_COMPONENTS = [
  DSODEventCardComponent,
  DSODEventSlideComponent,
  DSODEventTrainingComponent,
  DSODCreateEventComponent
];
