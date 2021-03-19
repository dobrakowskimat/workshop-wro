import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Book } from 'src/app/main/books/shared/models/book.model';
import * as BookActions from '../actions/book.actions';
import * as AppState from '../../../state/app.state';

export interface BookState {
  bookList: Book[];
  selectedBook: Book;
  selectedBookId: number;
}

export interface State extends AppState.State {
  books: BookState;
}

const initialState: BookState = {
  bookList: [],
  selectedBook: null,
  selectedBookId: null,
};

const getBookFeatureState = createFeatureSelector<BookState>('books');

export const getBooks = createSelector(getBookFeatureState, (state) => state.bookList);

export const getSelectedBookId = createSelector(getBookFeatureState, (state) => state.selectedBookId);
//this is not directly in our store
export const getSelectedBookById = createSelector(getBookFeatureState, getSelectedBookId, (state, selectedBookId) =>
  state.bookList.find((book) => book.id === selectedBookId),
);

export const getSelectedBook = createSelector(getBookFeatureState, (state) => state.selectedBook);

export const bookReducer = createReducer<BookState>(
  initialState,
  on(
    BookActions.selectBook,
    (state, action): BookState => {
      return {
        ...state,
        selectedBook: action.book,
        selectedBookId: action.book.id,
      };
    },
  ),
  on(
    BookActions.loadBooksSuccess,
    (state, action): BookState => {
      return {
        ...state,
        bookList: action.bookList,
      };
    },
  ),
);
