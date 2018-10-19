import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSODFooterComponent } from './footer.component';

describe('DSODFooterComponent', () => {
  let component: DSODFooterComponent;
  let fixture: ComponentFixture<DSODFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DSODFooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSODFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
