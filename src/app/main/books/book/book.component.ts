import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() childBook: Book;

  constructor() {}

  ngOnInit(): void {

  }

  deleteBook(book: Book) {
    //TODO:
  }
}
