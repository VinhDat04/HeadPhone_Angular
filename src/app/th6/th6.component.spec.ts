import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Th6Component } from './th6.component';

describe('Th6Component', () => {
  let component: Th6Component;
  let fixture: ComponentFixture<Th6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Th6Component]
    });
    fixture = TestBed.createComponent(Th6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
