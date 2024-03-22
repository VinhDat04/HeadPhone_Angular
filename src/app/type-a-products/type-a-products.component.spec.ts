import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAProductsComponent } from './type-a-products.component';

describe('TypeAProductsComponent', () => {
  let component: TypeAProductsComponent;
  let fixture: ComponentFixture<TypeAProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeAProductsComponent]
    });
    fixture = TestBed.createComponent(TypeAProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
