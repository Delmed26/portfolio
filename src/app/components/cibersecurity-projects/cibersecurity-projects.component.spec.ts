import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibersecurityProjectsComponent } from './cibersecurity-projects.component';

describe('CibersecurityProjectsComponent', () => {
  let component: CibersecurityProjectsComponent;
  let fixture: ComponentFixture<CibersecurityProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CibersecurityProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CibersecurityProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
