import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSODAddNewResidencyComponent } from './add-new-residency.component';

describe('AddNewResidencyComponent', () => {
  let component: DSODAddNewResidencyComponent;
  let fixture: ComponentFixture<DSODAddNewResidencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSODAddNewResidencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSODAddNewResidencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
