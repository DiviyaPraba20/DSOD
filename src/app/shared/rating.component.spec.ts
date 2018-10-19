import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSODRatingComponent } from './rating.component';

describe('DSODRatingComponent', () => {
    let component: DSODRatingComponent;
    let fixture: ComponentFixture<DSODRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [DSODRatingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(DSODRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
