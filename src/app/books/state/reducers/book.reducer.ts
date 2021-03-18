import { createFeatureSelector, createReducer, createSelector } from '@ngrx/store';
import { Book } from 'src/app/main/books/shared/models/book.model';
import * as bookActions from '../actions/book.actions';
import * as AppState from '../../../state/app.state'

export interface BookState {
  bookList: Book[];
  selectedBookId: number;
}

export interface State extends AppState.State {
  books: BookState;
}

const initialState: BookState = {
  bookList: [],
  selectedBookId: null
}

const getBookFeatureState = createFeatureSelector<BookState>('books');

export const getBooks = createSelector(
  getBookFeatureState,
  state => state.bookList
)

export const getSelectedBookId = createSelector(
  getBookFeatureState,
  state => state.selectedBookId
)
//this is not directly in our store
export const getSelectedBook = createSelector(
  getBookFeatureState,
  getSelectedBookId,
  (state, selectedBookId) =>
  state.bookList.find(book => book.id === selectedBookId)
)

export const bookReducer = createReducer<BookState>(initialState, {}) {
)
