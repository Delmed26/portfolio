import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDelgadilloComponent } from './img-delgadillo.component';

describe('ImgDelgadilloComponent', () => {
  let component: ImgDelgadilloComponent;
  let fixture: ComponentFixture<ImgDelgadilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgDelgadilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgDelgadilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
