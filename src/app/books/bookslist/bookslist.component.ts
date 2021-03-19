import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BooksService } from 'src/app/services/books.service';
import { Book, BookPayload } from '../../main/books/shared/models/book.model';
import { getBooks, State } from '../state/reducers/book.reducer';
import * as BookActions from '../state/actions/book.actions';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.scss'],
})
export class BookslistComponent implements OnInit, OnDestroy {
  books$: Observable<Book[]>;
  booksStore$: Observable<Book[]>;
  subscription = new Subscription();
  @Output() selectedBook = new EventEmitter<Book>();

  constructor(private booksService: BooksService, private store: Store<State>) {}

  ngOnInit(): void {
    this.books$ = this.booksService.getBooks().pipe(
      map((books) => {
        return books.filter((book) => {
          return book.originallyPublishedYear > 1950;
        });
      }),
    );

    this.booksStore$ = this.store.select(getBooks);
  }

  deleteBook(book: Book) {
    // this.books = this.books.filter((b) => book.id !== book.id);
  }

  addBook(book: BookPayload) {
    this.subscription.add(this.booksService.addBook(book).subscribe((res) => console.log('Book successfully added')));
  }

  addDummyBook() {
    const book = {
      title: 'The Grapes of Wrath',
      subtitle: null,
      originallyPublishedYear: 1939,
      seriesTitle: null,
      pageCount: 430,
      description:
        'The Grapes of Wrath is set in the Great Depression and describes a family of sharecroppers, the Joads, who were driven from their land due to the dust storms of the Dust Bowl.',
      authorFullName: 'John Stainbeck',
      publishDate: new Date('2014-08-17'),
    } as BookPayload;
    this.addBook(book);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectBook(book: Book) {
    this.selectedBook.emit(book);
  }

  selectBookStore(book: Book) {
    this.store.dispatch(BookActions.selectBook({ book }));
  }
}
