import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSODEventsPageComponent } from './events-page.component';

describe('EventsPageComponent', () => {
  let component: DSODEventsPageComponent;
  let fixture: ComponentFixture<DSODEventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DSODEventsPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSODEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
