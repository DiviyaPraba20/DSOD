import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSODCarouselComponent } from './carousel.component';

describe('DSODCarouselComponent', () => {
  let component: DSODCarouselComponent;
  let fixture: ComponentFixture<DSODCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DSODCarouselComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSODCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
