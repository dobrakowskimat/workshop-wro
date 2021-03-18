import { createAction, props } from '@ngrx/store';
import { Book } from '../../../main/books/shared/models/book.model';

// export const LOAD_BOOKS = 'LOAD_BOOKS';
// export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
// export const LOAD_BOOKS_FAIL = 'LOAD_BOOKS_FAIL';

// export class LoadCompaniesAction {
//   readonly type = LOAD_BOOKS;
// }

// export class LoadCompaniesSuccessAction {
//   readonly type = LOAD_BOOKS_SUCCESS;
//   constructor(public payload: Book[]) {}
// }

// export class LoadCompaniesFailAction {
//   readonly type = LOAD_BOOKS_FAIL;
// }

export const getBooksAction = createAction(
  '[Book] Set selected Book',
  props<{book: Book}>
)

// export type Action = LoadCompaniesAction | LoadCompaniesSuccessAction | LoadCompaniesFailAction;
