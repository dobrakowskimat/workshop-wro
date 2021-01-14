import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Book } from '../books/shared/models/book.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() booksInShoppingCart: Book[];
  @Output() bookRemoved = new EventEmitter<Book>();

  constructor() {
   }

  ngOnInit(): void {
  }

  removedFromCart(book : Book) {
    this.bookRemoved.emit(book);
  }
}
