import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResidencyComponent } from './edit-residency.component';

describe('EditResidencyComponent', () => {
  let component: EditResidencyComponent;
  let fixture: ComponentFixture<EditResidencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResidencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResidencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
