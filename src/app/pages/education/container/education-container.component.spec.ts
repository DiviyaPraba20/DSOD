import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationContainerComponent } from './education-container.component';

describe('EducationContainerComponent', () => {
  let component: EducationContainerComponent;
  let fixture: ComponentFixture<EducationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
