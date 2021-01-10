import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() childBook: Book;
  @Output() bookDeleted = new EventEmitter<Book>();
  @Output() bookSelected = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteBook(book: Book) {
    this.bookDeleted.emit(book);
  }

  showDetails(book: Book) {
    this.bookSelected.emit(book);
  }
}
