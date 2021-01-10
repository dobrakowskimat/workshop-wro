import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/operators';
import { BooksService } from 'src/app/services/books.service';
import { Book, BookPayload } from '../shared/models/book.model';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.scss']
})

export class BookslistComponent implements OnInit {

  books$: Observable<Book[]>;
  subscription = new Subscription();

  selectedBook : Book;

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks().pipe(
      //map(
      //books => {
        //return books.filter(book => {
          //return book.originallyPublishedYear > 1950;
        //})
      // }
    // )
    );
  }

  deleteBook(book: Book) {
    // this.books = this.books.filter(
    //   (b) => book.id !== book.id
    // );
  }

  selectBook(book: Book) {
    this.selectedBook = book;
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

  addBook(book: BookPayload) {
    this.subscription.add(this.bookService.addBook(book).subscribe(
      res => console.log("Book successfully added"))
    );
  }

  ngOnDestry() {
    this.subscription.unsubscribe();
  }
}
