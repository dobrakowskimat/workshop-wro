import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Book, BookPayload } from './main/books/shared/models/book.model';
import { BooksService } from './main/books/shared/services/books/books.service';

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
  private subsription = new Subscription();
  private booksUpdated$ = new BehaviorSubject(null);
  private showDetails$ = new Subject<string>();

  constructor(private readonly booksService: BooksService) {}

  ngOnInit(): void {
    this.books$ = this.booksUpdated$.pipe(
      switchMap(() => this.booksService.getAll())
    );
    this.book$ = this.showDetails$.pipe(
      switchMap((id) => this.booksService.get(id))
    );
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
        .create(book)
        .pipe(tap(() => this.booksUpdated$.next(null)))
        .subscribe()
    );
  }

  deleteBook(id: string): void {
    this.subsription.add(
      this.booksService
        .delete(id)
        .pipe(tap(() => this.booksUpdated$.next(null)))
        .subscribe()
    );
  }

  showDetails(id: string): void {
    this.showDetails$.next(id);
  }
}
