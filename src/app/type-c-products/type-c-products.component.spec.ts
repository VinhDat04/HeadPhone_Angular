import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCProductsComponent } from './type-c-products.component';

describe('TypeCProductsComponent', () => {
  let component: TypeCProductsComponent;
  let fixture: ComponentFixture<TypeCProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeCProductsComponent]
    });
    fixture = TestBed.createComponent(TypeCProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
