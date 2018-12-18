import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationItemCardComponent } from './education-item-card.component';

describe('EducationItemCardComponent', () => {
  let component: EducationItemCardComponent;
  let fixture: ComponentFixture<EducationItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
