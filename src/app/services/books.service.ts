import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Book, BookPayload } from '../books/shared/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  apiUrl: string = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.apiUrl}/books`);
  }

  getBook(bookId: string): Observable<Book> {
    return this.httpClient.get<Book>(`${this.apiUrl}/books/${bookId}`);
  }

  addBook(book: BookPayload): Observable<Book> {
    return this.httpClient
      .post<Book>(`${this.apiUrl}/books`, book, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  editBook(bookId: string, book: BookPayload): Observable<Book> {
    return this.httpClient
      .put<Book>(`${this.apiUrl}/books/${bookId}`, book)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteBook(bookId: string): Observable<any> {
    return this.httpClient.delete<Book>(`${this.apiUrl}/books/${bookId}`);
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
