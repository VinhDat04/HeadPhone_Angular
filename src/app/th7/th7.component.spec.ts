import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Th7Component } from './th7.component';

describe('Th7Component', () => {
  let component: Th7Component;
  let fixture: ComponentFixture<Th7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Th7Component]
    });
    fixture = TestBed.createComponent(Th7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
