import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { View } from './main/books/shared/enums';
import { Book, BookPayload } from './main/books/shared/models/book.model';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'workshop-wro';
  today = new Date();
  books$: Observable<Book[]>;
  book$: Observable<Book>;
  shoppingCard: Book[] = [];
  selectedBook: Book;
  editedBook : Book;
  view = View;
  routeValue: View;
  private subsription = new Subscription();
  private booksUpdated$ = new BehaviorSubject(null);
  private showDetails$ = new Subject<string>();

  constructor(private readonly booksService: BooksService) {}



  ngOnInit(): void {
    this.books$ = this.booksUpdated$.pipe(
      switchMap(() => this.booksService.getBooks())
    );
    this.book$ = this.showDetails$.pipe(
      switchMap((id) => this.booksService.getBook(id))
    );
    this.routeValue = this.view.BookList;
  }

  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }

  addBook(): void {
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

    this.subsription.add(
      this.booksService
        .addBook(book)
        .pipe(tap(() => this.booksUpdated$.next(null)))
        .subscribe()
    );
  }

  deleteBook(id: string): void {
    this.subsription.add(
      this.booksService
        .deleteBook(id)
        .pipe(tap(() => this.booksUpdated$.next(null)))
        .subscribe()
    );
  }

  showDetails(id: string): void {
    this.showDetails$.next(id);
    this.navigateTo(View.BookDetails)
  }

  navigateTo(viewSelected : View) {
    this.routeValue = viewSelected;
  }

  selectBook(book: Book) {
    this.routeValue = View.BookDetails;
    this.selectedBook = book;
  }

  bookAddedToShoppingCard(book: Book) {
    this.shoppingCard.indexOf(book) === -1 ? this.shoppingCard.push(book) : console.log("This book already in shopping cart");
  }

  bookEdited(book : Book) {
    this.editedBook = book;
    this.navigateTo(View.AddBook);
  }

  bookRemovedFromShoppingCart(book: Book) {
    const index: number = this.shoppingCard.findIndex(item => item.id == book.id);
    if (index !== -1) {
      this.shoppingCard.splice(index, 1);
  }
}
}
