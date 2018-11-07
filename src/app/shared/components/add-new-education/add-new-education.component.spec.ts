import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSODAddNewEducationComponent } from './add-new-education.component';

describe('AddNewEducationComponent', () => {
  let component: DSODAddNewEducationComponent;
  let fixture: ComponentFixture<DSODAddNewEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSODAddNewEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSODAddNewEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
