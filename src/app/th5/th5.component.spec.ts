import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Th5Component } from './th5.component';

describe('Th5Component', () => {
  let component: Th5Component;
  let fixture: ComponentFixture<Th5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Th5Component]
    });
    fixture = TestBed.createComponent(Th5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
