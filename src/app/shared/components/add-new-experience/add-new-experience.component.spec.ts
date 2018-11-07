import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSODAddNewExperienceComponent } from './add-new-experience.component';

describe('AddNewExperienceComponent', () => {
  let component: DSODAddNewExperienceComponent;
  let fixture: ComponentFixture<DSODAddNewExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSODAddNewExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSODAddNewExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
