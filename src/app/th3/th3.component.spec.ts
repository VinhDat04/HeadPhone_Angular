import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Th3Component } from './th3.component';

describe('Th3Component', () => {
  let component: Th3Component;
  let fixture: ComponentFixture<Th3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Th3Component]
    });
    fixture = TestBed.createComponent(Th3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
