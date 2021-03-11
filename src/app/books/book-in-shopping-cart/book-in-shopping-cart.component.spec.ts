import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInShoppingCartComponent } from './book-in-shopping-cart.component';

describe('BookInShoppingCartComponent', () => {
  let component: BookInShoppingCartComponent;
  let fixture: ComponentFixture<BookInShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookInShoppingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
