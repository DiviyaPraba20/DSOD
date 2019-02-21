import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualEssayComponent } from './visual-essay.component';

describe('VisualEssayComponent', () => {
  let component: VisualEssayComponent;
  let fixture: ComponentFixture<VisualEssayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualEssayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
