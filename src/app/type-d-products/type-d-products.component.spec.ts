import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDProductsComponent } from './type-d-products.component';

describe('TypeDProductsComponent', () => {
  let component: TypeDProductsComponent;
  let fixture: ComponentFixture<TypeDProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeDProductsComponent]
    });
    fixture = TestBed.createComponent(TypeDProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
