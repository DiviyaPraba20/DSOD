import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSODHomeAdComponent } from './ad-banner.component';

describe('DsodHomeAdComponent', () => {
  let component: DSODHomeAdComponent;
  let fixture: ComponentFixture<DSODHomeAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DSODHomeAdComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSODHomeAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
