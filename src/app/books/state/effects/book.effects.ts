import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { BooksService } from 'src/app/services/books.service';
import * as BookActions from '../actions/book.actions';

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private bookService: BooksService) {}

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBooks),
      mergeMap(() => this.bookService.getBooks().pipe(map((bookList) => BookActions.loadBooksSuccess({ bookList })))),
    );
  });
}
