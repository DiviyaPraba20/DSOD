import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorPostsComponent } from './sponsor-posts.component';

describe('SponsorPostsComponent', () => {
  let component: SponsorPostsComponent;
  let fixture: ComponentFixture<SponsorPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
