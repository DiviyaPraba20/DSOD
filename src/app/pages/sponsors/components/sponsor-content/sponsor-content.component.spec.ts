import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorContentComponent } from './sponsor-content.component';

describe('SponsorContentComponent', () => {
  let component: SponsorContentComponent;
  let fixture: ComponentFixture<SponsorContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
