import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/models/book.model';

@Component({
  selector: '[app-book-in-shopping-cart]',
  templateUrl: './book-in-shopping-cart.component.html',
  styleUrls: ['./book-in-shopping-cart.component.scss']
})
export class BookInShoppingCartComponent implements OnInit {

  @Input() childBook: Book;
  @Output() bookRemoved = new EventEmitter<Book>();


  constructor() { }

  ngOnInit(): void {
  }

  removeFromShoppingCart(book: Book) {
    this.bookRemoved.emit(book);
  }

}
