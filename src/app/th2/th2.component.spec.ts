import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Th2Component } from './th2.component';

describe('Th2Component', () => {
  let component: Th2Component;
  let fixture: ComponentFixture<Th2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Th2Component]
    });
    fixture = TestBed.createComponent(Th2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
