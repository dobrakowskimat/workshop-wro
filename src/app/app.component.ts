import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './main/books/shared/models/book.model';
import { BooksService } from './main/books/shared/services/books/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'workshop-wro';
  today = new Date();
  books$: Observable<Book[]>;
  book$: Observable<Book>;

  constructor(private readonly booksService: BooksService) {}

  ngOnInit(): void {
    this.books$ = this.booksService.getAll();
    this.book$ = this.booksService.get('6aa597d0-6fe7-46e9-91e3-44e280e7e32b');
  }
}
