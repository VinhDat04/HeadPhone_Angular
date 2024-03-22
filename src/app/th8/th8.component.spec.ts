import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Th8Component } from './th8.component';

describe('Th8Component', () => {
  let component: Th8Component;
  let fixture: ComponentFixture<Th8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Th8Component]
    });
    fixture = TestBed.createComponent(Th8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
