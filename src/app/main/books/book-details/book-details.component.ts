import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  @Input() selectedBook: Book;
  @Output() addedBook = new EventEmitter<Book>();

  constructor() {}

  ngOnInit(): void {}

  addBookToShoppingCart(book: Book){
    this.addedBook.emit(book);
  }
}
