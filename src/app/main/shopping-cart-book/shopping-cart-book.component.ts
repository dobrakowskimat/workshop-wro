import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Book } from '../books/shared/models/book.model';

@Component({
  selector: 'app-shopping-cart-book',
  templateUrl: './shopping-cart-book.component.html',
  styleUrls: ['./shopping-cart-book.component.scss']
})
export class ShoppingCartBookComponent implements OnInit {
  @Input() childBook: Book;
  @Output() bookRemoved = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  removeBookFromCart(book: Book) {
    this.bookRemoved.emit(book);
  }
}
