import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSODSponsorsContainerComponent } from './sponsors-container.component';

describe('DSODSponsorsContainerComponent', () => {
  let component: DSODSponsorsContainerComponent;
  let fixture: ComponentFixture<DSODSponsorsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DSODSponsorsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSODSponsorsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
