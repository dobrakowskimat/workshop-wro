import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  @Input() bookListInShoppingCart: Book[];
  @Output() bookRemoved = new EventEmitter<Book>();

  ngOnInit(): void {
  }

  bookRemovedFromShoppingCart(book : Book) {
    this.bookRemoved.emit(book);
  }

}
