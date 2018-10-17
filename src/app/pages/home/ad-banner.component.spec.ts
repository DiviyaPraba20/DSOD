import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsodHomeAdComponent } from './ad-banner.component';

describe('DsodHomeAdComponent', () => {
    let component: DsodHomeAdComponent;
    let fixture: ComponentFixture<DsodHomeAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [DsodHomeAdComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(DsodHomeAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
