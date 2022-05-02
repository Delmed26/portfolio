import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedProjectsComponent } from './pinned-projects.component';

describe('PinnedProjectsComponent', () => {
  let component: PinnedProjectsComponent;
  let fixture: ComponentFixture<PinnedProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinnedProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
