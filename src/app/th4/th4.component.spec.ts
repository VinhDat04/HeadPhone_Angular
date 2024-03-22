import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Th4Component } from './th4.component';

describe('Th4Component', () => {
  let component: Th4Component;
  let fixture: ComponentFixture<Th4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Th4Component]
    });
    fixture = TestBed.createComponent(Th4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
