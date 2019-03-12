import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPolicyComponent } from './ad-policy.component';

describe('AdPolicyComponent', () => {
  let component: AdPolicyComponent;
  let fixture: ComponentFixture<AdPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
