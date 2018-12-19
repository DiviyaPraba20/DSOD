import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSubCategoryComponent } from './education-sub-category.component';

describe('EducationSubCategoryComponent', () => {
  let component: EducationSubCategoryComponent;
  let fixture: ComponentFixture<EducationSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
