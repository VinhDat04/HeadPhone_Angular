import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Th1Component } from './th1.component';

describe('Th1Component', () => {
  let component: Th1Component;
  let fixture: ComponentFixture<Th1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Th1Component]
    });
    fixture = TestBed.createComponent(Th1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
