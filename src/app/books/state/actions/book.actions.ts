import { createAction, props } from '@ngrx/store';
import { Book } from '../../../main/books/shared/models/book.model';

// export class LoadCompaniesSuccessAction {
//   readonly type = LOAD_BOOKS_SUCCESS;
//   constructor(public payload: Book[]) {}
// }

export const selectBook = createAction('[Book] Set selected Book', props<{ book: Book }>());

export const loadBooks = createAction('[Book] Load books');
export const loadBooksSuccess = createAction('[Book] Load books Success', props<{ bookList: Book[] }>());
export const loadBooksFail = createAction('[Book] Load books Fail', props<{ error: string }>());

export const loadBookById = createAction('[Book] Load book by id');
