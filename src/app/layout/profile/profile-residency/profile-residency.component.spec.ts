import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileResidencyComponent } from './profile-residency.component';

describe('ProfileResidencyComponent', () => {
  let component: ProfileResidencyComponent;
  let fixture: ComponentFixture<ProfileResidencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileResidencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileResidencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
