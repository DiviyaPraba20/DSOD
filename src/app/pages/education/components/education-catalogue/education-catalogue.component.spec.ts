import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCatalogueComponent } from './education-catalogue.component';

describe('EducationCatalogueComponent', () => {
  let component: EducationCatalogueComponent;
  let fixture: ComponentFixture<EducationCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
