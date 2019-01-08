import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityContainerComponent } from './community-container.component';

describe('CommunityContainerComponent', () => {
  let component: CommunityContainerComponent;
  let fixture: ComponentFixture<CommunityContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
