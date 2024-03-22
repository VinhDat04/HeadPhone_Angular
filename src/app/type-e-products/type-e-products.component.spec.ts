import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEProductsComponent } from './type-e-products.component';

describe('TypeEProductsComponent', () => {
  let component: TypeEProductsComponent;
  let fixture: ComponentFixture<TypeEProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeEProductsComponent]
    });
    fixture = TestBed.createComponent(TypeEProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
