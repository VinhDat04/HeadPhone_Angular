import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBProductsComponent } from './type-b-products.component';

describe('TypeBProductsComponent', () => {
  let component: TypeBProductsComponent;
  let fixture: ComponentFixture<TypeBProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeBProductsComponent]
    });
    fixture = TestBed.createComponent(TypeBProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
