import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  @Input() selectedBook: Book;
  @Output() selectedBookForEdit = new EventEmitter<Book>();

  constructor() {}

  ngOnInit(): void {}

  editBook(book: Book) {
    this.selectedBookForEdit.emit(book);
  }
}
