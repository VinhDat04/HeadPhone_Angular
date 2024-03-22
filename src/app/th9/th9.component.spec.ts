import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Th9Component } from './th9.component';

describe('Th9Component', () => {
  let component: Th9Component;
  let fixture: ComponentFixture<Th9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Th9Component]
    });
    fixture = TestBed.createComponent(Th9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
