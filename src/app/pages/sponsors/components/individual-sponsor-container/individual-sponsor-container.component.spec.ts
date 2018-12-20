import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualSponsorContainerComponent } from './individual-sponsor-container.component';

describe('IndividualSponsorContainerComponent', () => {
  let component: IndividualSponsorContainerComponent;
  let fixture: ComponentFixture<IndividualSponsorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualSponsorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualSponsorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
