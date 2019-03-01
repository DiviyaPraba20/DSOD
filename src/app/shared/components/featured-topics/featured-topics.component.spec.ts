import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSODFeaturedTopicsComponent } from './featured-topics.component';

describe('DSOFeaturedTopicsComponent', () => {
    let component: DSODFeaturedTopicsComponent;
    let fixture: ComponentFixture<DSODFeaturedTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [DSODFeaturedTopicsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(DSODFeaturedTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
