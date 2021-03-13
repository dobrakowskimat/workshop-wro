import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { Book } from '../../main/books/shared/models/book.model';
import { BooksService } from '../../main/books/shared/services/books/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book>;
  bookId$: Observable<string>;

  constructor(private activeRoute: ActivatedRoute, private readonly booksService: BooksService) {}

  ngOnInit(): void {
    this.bookId$ = this.activeRoute.paramMap.pipe(map((params) => params.get('id')));
    this.book$ = this.bookId$.pipe(switchMap((id) => this.booksService.get(id)));
  }

  editBook(book: Book) {
    //TODO: /book/:id/edit
  }
}
