import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartBookComponent } from './shopping-cart-book.component';

describe('ShoppingCartBookComponent', () => {
  let component: ShoppingCartBookComponent;
  let fixture: ComponentFixture<ShoppingCartBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
