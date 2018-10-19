import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSOFeaturedTopicsComponent } from './featured-topics.component';

describe('DSOFeaturedTopicsComponent', () => {
    let component: DSOFeaturedTopicsComponent;
    let fixture: ComponentFixture<DSOFeaturedTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [DSOFeaturedTopicsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(DSOFeaturedTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
