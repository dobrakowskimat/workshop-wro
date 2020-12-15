import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BooksService } from 'src/app/services/books.service';
import { Book, BookPayload } from '../shared/models/book.model';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.scss'],
})
export class BookslistComponent implements OnInit, OnDestroy {
  books$: Observable<Book[]>;
  subscription = new Subscription();

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books$ = this.booksService.getBooks().pipe(
      map((books) => {
        return books.filter((book) => {
          return book.originallyPublishedYear > 1950;
        });
      })
    );
  }

  deleteBook(book: Book) {
    // this.books = this.books.filter((b) => book.id !== book.id);
  }

  addBook(book: BookPayload) {
    this.subscription.add(
      this.booksService
        .addBook(book)
        .subscribe((res) => console.log('Book successfully added'))
    );
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
}
